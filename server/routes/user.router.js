const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const Person = require('../models/Person');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Person.find()
// .then(people => {
//   console.log(people);
// });

// Person.findByIdAndUpdate('12312easdfq23da', {})
// .then(result => {

// });

// {favorites: {$addToSet}}
// $pull 

// Person.findByIdAndUpdate('1231231', {$addToSet: {favorites: {id: 1}}}, {new: true})
// .then(function (user) {
//   // user new updated user
// });

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const newPerson = new Person({ username, password });
  newPerson.save()
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

router.post('/addFavorite', (req, res, next) => {
  if (req.isAuthenticated()) {
  console.log('favorite data body',req.body);
  const username = req.body.userName.username;

  Person.updateOne({username}, {$addToSet: {favorites: req.body.favorite}})
  .then(() => {
    // user new updated user
    res.sendStatus(200);
  })
  .catch(error => {
    console.log(error);
    res.sendStatus(500);
  })

}else {
  res.sendStatus(403);
}
});

router.put('/updateComment', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('updated-----------', req.body.id)
  Person.findById(req.user._id)
  .then((user) => {
    console.log(user);
    // user.favorites
    // update the comment in favorites
    user.favorites.forEach(function (favorite, index) {
      console.log(favorite);
      if (favorite.object_id.toString() === req.body.object_id) {
        favorite.comment = req.body.comment;
      }
    });
    return user.save();
  })
  .then(() => {
    // user new updated user
    res.sendStatus(200);
  })
  .catch(error => {
    console.log(error);
    res.sendStatus(500);
  })

}else {
  res.sendStatus(403);
}
});


router.delete('/deleteFavorite', (req, res, next) => {
  if (req.isAuthenticated()) {
  console.log('------------------deleting favorite----------------');
  console.log('param',req.query.objectId);
  console.log('user',req.user);
  const username = req.user.username;

  Person.updateOne({username}, {$pull: {favorites: {object_id: req.query.objectId}}})
  .then(() => {
    // user new updated user
    res.sendStatus(200);
  })
  .catch(error => {
    console.log(error);
    res.sendStatus(500);
  })
}else {
  res.sendStatus(403);
}
})

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
  
});

module.exports = router;
