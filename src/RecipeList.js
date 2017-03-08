import React from 'react';
import { Card, List, Button, Icon } from 'semantic-ui-react';

import recipes from './defaultRecipes';

const RecipeList = () => {
    return (
        <div>
            <Card.Group>
                {recipes.map(recipe => {
                    return (
                        <Card key={recipe.id}>
                            <Card.Content>
                                <Card.Header>{recipe.title}</Card.Header>
                                <Card.Description>
                                    <List>
                                        {recipe.ingredients.map((ingredient, i) => <List.Item key={i}>{` - ${ingredient}`}</List.Item>)}
                                    </List>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button animated="vertical" color='yellow'>
                                    <Button.Content visible>Favourite</Button.Content>
                                    <Button.Content hidden><Icon name='star' /></Button.Content>                                            
                                </Button>
                                <Button animated="vertical" color='green'>
                                    <Button.Content visible>Edit</Button.Content>
                                    <Button.Content hidden><Icon name='pencil' /></Button.Content>                                            
                                </Button>
                                <Button animated="vertical" color='red'>
                                    <Button.Content visible>Delete</Button.Content>
                                    <Button.Content hidden><Icon name='delete' /></Button.Content>                                            
                                </Button>
                            </Card.Content>
                        </Card>
                    )}
                )}
            </Card.Group>
        </div>
    );
};

RecipeList.propTypes = {
    recipes: React.PropTypes.array
};

export default RecipeList;