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