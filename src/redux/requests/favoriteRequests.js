import axios from 'axios';

export function getFavorite() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      return axios.get('api/user', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}


export function addFavoriteToDatabase(action) {

  console.log('constructing data',action);
  const data = {
      favorite: action.payload,
      userName: action.userName,
  };
  console.log('sending data',data);

  
    return axios.post('api/user/addFavorite', data)
      .then(response => response.data)
      .catch((error) => { throw error; });
}

export function deleteFavoriteDatabase(action) {
  console.log('------deleting favoirt in request---------');
console.log(action);
  console.log(`api/user/deleteFavorite?objectId=${action.object_id}`);
  
    return axios.delete(`api/user/deleteFavorite?objectId=${action.object_id}`, )
      .then(response => response.data)
      .catch((error) => { throw error; });
}

export function updateFavoriteComment(action) {
  console.log('------update favoirt in request---------');
console.log('lol]]]------------', action);
  
    return axios.put(`api/user/updateComment`, {object_id: action.object_id, comment: action.comment})
      .then(response => response.data)
      .catch((error) => { throw error; });
}