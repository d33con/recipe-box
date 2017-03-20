import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';

import recipes from './data/defaultRecipes';

const defaultState = {
    recipes
}

const store = createStore(rootReducer, defaultState);

export const history = createBrowserHistory();

export default store;