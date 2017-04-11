import { v4 } from 'node-uuid';

// favourite recipe
export function toggleFavourite(id) {
    return {
        type: 'TOGGLE_FAVOURITE',
        id
    }
}

// add recipe
export function addRecipe(recipeName, ingredients) {
    return {
        type: 'ADD_RECIPE',
        id: v4(),
        recipeName,
        ingredients
    }
}

// edit recipe
export function editRecipe(id, recipeName, ingredients) {
    return {
        type: 'EDIT_RECIPE',
        id,
        recipeName,
        ingredients
    }
}

// delete recipe
export function deleteRecipe(id) {
    return {
        type: 'DELETE_RECIPE',
        id
    }
}