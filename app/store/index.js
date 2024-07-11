import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './slice/wordsSlice'
import wordModalReducer from './slice/wordModalSlice'
import verbsReducer from './slice/verbSlice';

export const store = configureStore({
    reducer: {
        words: wordsReducer,
        wordModal: wordModalReducer,
        verbs: verbsReducer
    }
});