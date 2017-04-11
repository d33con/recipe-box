import React from 'react';

import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import UserMenu from './UserMenu';

const Main = () => {
    return (
      <div>
          <UserMenu />
          <RecipeList />
          <AddRecipe />
      </div>
    )
};

export default Main;
