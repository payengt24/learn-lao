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

  
    return axios.post('api/user/addfavorite', data)
      .then(response => response.data)
      .catch((error) => { throw error; });
}