import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './slices/recipeSlice';

export default configureStore({
    reducer: {
        recipe: recipeSlice
    },
});