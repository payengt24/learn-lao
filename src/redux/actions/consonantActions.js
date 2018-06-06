export const CONSONANT_ACTIONS = {
    GET: 'GET_CONSONANT',
    ADD: 'SET_CONSONANT',
    DELETE: 'DELETE_CONSONANT',
    SET: 'SET_CONSONANT',
  };
  
  
  export function getConsonant() {
    return { type: CONSONANT_ACTIONS.GET };
  }