// favourite recipe
export function toggleFavourite(id) {
    return {
        type: 'TOGGLE_FAVOURITE',
        id
    }
}

// add recipe
export function addRecipe(id, recipeName, ingredients) {
    return {
        type: 'ADD_RECIPE',
        id,
        recipeName,
        ingredients
    }
}

// edit recipe
export function addRecipe(id, recipeName, ingredients) {
    return {
        type: 'ADD_RECIPE',
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