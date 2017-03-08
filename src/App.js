import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import RecipeList from './RecipeList';
import UserMenu from './UserMenu';
import AddRecipe from './AddRecipe';
import Favourites from './Favourites';
import Home from './Home';

import recipes from './defaultRecipes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <UserMenu />
          </div>
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
    );
  }
}

export default App;
