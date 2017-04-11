import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';

const recipeApp = combineReducers({recipes, routing: routerReducer});

export default recipeApp;
