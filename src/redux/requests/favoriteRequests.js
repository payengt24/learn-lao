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
  // const data = {
  //     favorite: action.id,
  //     userName: action.username,
  // };
  // console.log('deleting data',data);
  console.log(`api/user/deleteFavorite?favorite=${action.id}`);
  
    return axios.delete(`api/user/deleteFavorite?favorite=${action.id}`, )
      .then(response => response.data)
      .catch((error) => { throw error; });
}