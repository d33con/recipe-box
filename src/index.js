import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './App';
import Home from './Home';
import RecipeList from './RecipeList';
import Favourites from './Favourites';
import AddRecipe from './AddRecipe';
import UserMenu from './UserMenu';
 
import './styles/index.css';

const router = (
        <Provider store={store}>
            <Router history={history}>
                <div> 
                    <UserMenu />
                    <Route path="/" component={App} />
                    <Route exact path="/" component={Home} />
                    <Route path="/recipes" component={RecipeList} />
                    <Route path="/favourites" component={Favourites} />
                    <Route path="/addrecipe" component={AddRecipe} />
                </div>
            </Router>
        </Provider>
    );

ReactDOM.render(
  router,
  document.getElementById('root')
);
