import axios from 'axios';

export function getConsonant() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      return axios.get('api/consonant', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}