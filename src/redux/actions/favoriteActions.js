export const FAVORITE_ACTIONS = {
    GET: 'GET_FAVORITE',
    ADD: 'POST_FAVORITE',
    DELETE: 'DELETE_FAVORITE',
    SET: 'UPDATE_FAVORITE',
  };
  
  
  export function getFavorite() {
    return { type: FAVORITE_ACTIONS.GET };
  }