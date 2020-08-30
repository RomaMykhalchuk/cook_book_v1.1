import { SET_INGREDIENTS } from '../actionTypes';

export const setIngredients = (data) => ({ type: SET_INGREDIENTS, ingredient: data});

const reducer = (ingredients = [], action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return [...ingredients, action.ingredient];
    case 'delete':
      return ingredients.filter(current => current.item !== action.item);
    default:
      return ingredients;
  }
};

export default reducer;