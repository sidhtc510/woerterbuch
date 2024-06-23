import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './slice/wordsSlice'

export const store = configureStore({
    reducer: {
        words: wordsReducer
    }
});