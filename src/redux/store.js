import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './slices/reviewSlice';


export const store = configureStore({
    reducer: {
        reviews: reviewReducer

    },
})