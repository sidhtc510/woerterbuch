import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './slice/wordsSlice'
import wordModalReducer from './slice/wordModalSlice'

export const store = configureStore({
    reducer: {
        words: wordsReducer,
        wordModal: wordModalReducer
    }
});