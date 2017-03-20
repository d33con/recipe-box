import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import './styles/App.css';

import RecipeList from './RecipeList';
import UserMenu from './UserMenu';
import AddRecipe from './AddRecipe';
import Favourites from './Favourites';
import Home from './Home';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <div className="App">
                    <UserMenu />
                    <div className="main-content">
                        <Container>
                            <Route exact path="/" component={Home} />
                            <Route path="/recipes" component={RecipeList} />
                            <Route path="/favourites" component={Favourites} />
                            <Route path="/addrecipe" component={AddRecipe} />
                        </Container>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
