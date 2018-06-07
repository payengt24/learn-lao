export const VOWEL_ACTIONS = {
    GET: 'GET_VOWEL',
    ADD: 'SET_VOWEL',
    DELETE: 'DELETE_VOWEL',
    SET: 'SET_VOWEL',
  };
  
  
  export function getVowel() {
    return { type: VOWEL_ACTIONS.GET };
  }