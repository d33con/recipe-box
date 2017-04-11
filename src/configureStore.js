import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import recipeApp from './reducers/index';
import { saveState, loadState } from './localStorage';

const configureStore = () => {
    // load recipes from local storage
    const persistedState = loadState();
    const store = createStore(recipeApp, persistedState);
        // save the recipes to local storage
        store.subscribe(throttle(() => {
        saveState({
            recipes: store.getState().recipes
        })
    }, 1000))

    return store;
}

export default configureStore;