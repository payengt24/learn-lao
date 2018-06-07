export const VOCABULARY_ACTIONS = {
    GET: 'GET_VOCABULARY',
    ADD: 'SET_VOCABULARY',
    DELETE: 'DELETE_VOCABULARY',
    SET: 'SET_VOCABULARY',
  };
  
  
  export function getVocabulary() {
    return { type: VOCABULARY_ACTIONS.GET };
  }