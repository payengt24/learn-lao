export const FAVORITE_ACTIONS = {
    GET: 'GET_FAVORITE',
    ADD: 'SET_FAVORITE',
    DELETE: 'DELETE_FAVORITE',
    SET: 'SET_FAVORITE',
  };
  
  
  export function getFavorite() {
    return { type: FAVORITE_ACTIONS.GET };
  }