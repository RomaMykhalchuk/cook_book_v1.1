import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import recipesReducer from '../store/recipes';
import ingredientsReducer from '../store/newRecipe/ingredients';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;