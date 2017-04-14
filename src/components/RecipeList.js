import React, { Component } from 'react';
import { Card, List, Button, Icon } from 'semantic-ui-react';

import recipes from '../data/defaultRecipes';

class RecipeList extends Component {
    constructor() {
        super();
        this.state = {
            recipes
        }
    }

    deleteRecipe = (id) => {
        const newRecipes = [
            ...this.state.recipes.slice(0, id),
            ...this.state.recipes.slice(id+1)
        ];
        this.setState({
            recipes: newRecipes
        });
    }

    handleClick = (id) => {
        if(this.state.recipes.id !== id) {
            this.setState({
                recipes
            }); 
        }

        this.setState({
            ...this.state.recipes,
            isFavourite: !this.state.recipes.isFavourite
        }) 
    }

    render() {        
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
                                    {(recipe.isFavourite) ? <Icon 
                                                                name='star' 
                                                                color='yellow' 
                                                                size='large' 
                                                                onClick={this.handleClick.bind(null, recipe.id)}/> 
                                                        : <Icon 
                                                            name='empty star' 
                                                            color='grey' 
                                                            size='large' />}                                           
                                    <Button basic animated="vertical" color='green'>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden><Icon name='pencil' /></Button.Content>                                            
                                    </Button>
                                    <Button basic animated="vertical" color='red' onClick={this.deleteRecipe.bind(null, recipe.id)}>
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
    }
};

RecipeList.propTypes = {
    recipes: React.PropTypes.array
};

export default RecipeList;