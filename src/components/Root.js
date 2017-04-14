import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Main from './Main';
import Home from './Home';
import RecipeList from './RecipeList';
import Favourites from './Favourites';
import AddRecipe from './AddRecipe';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <div>
                <Route path="/" component={Main} />
                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={RecipeList} />
                <Route path="/favourites" component={Favourites} />
                <Route path="/addrecipe" component={AddRecipe} />
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;