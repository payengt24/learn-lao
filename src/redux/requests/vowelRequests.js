import axios from 'axios';

export function getVowel() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      return axios.get('api/vowel', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}