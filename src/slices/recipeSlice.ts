import { createSlice } from '@reduxjs/toolkit'

interface RecipeState {
    allRecipes: any[]
  }
  
const initialRecipeState = { allRecipes: [] } as RecipeState

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: initialRecipeState,
    reducers: {
        setAllRecipes: (state, action) => {
            state.allRecipes = action.payload;
        },
        addRecipe: (state, action) => {
            const newRecipes: any[] = state.allRecipes.concat([]);
            newRecipes.push(action.payload);
            state.allRecipes = newRecipes;
        }
    },
})

export const { setAllRecipes, addRecipe } = recipeSlice.actions

export default recipeSlice.reducer