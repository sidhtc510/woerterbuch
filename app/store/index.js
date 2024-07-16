import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './slice/wordsSlice'
import wordModalReducer from './slice/wordModalSlice'
import verbsReducer from './slice/verbSlice';
import derdasdieReducer from './slice/derdasdie';

export const store = configureStore({
    reducer: {
        words: wordsReducer,
        wordModal: wordModalReducer,
        verbs: verbsReducer,
        ddd_words: derdasdieReducer
    }
});