import axios from 'axios';

export function getVocabulary() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      return axios.get('api/vocabulary', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}