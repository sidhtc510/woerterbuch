import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './slice/wordsSlice'
import wordModalReducer from './slice/wordModalSlice'
import verbsReducer from './slice/verbSlice';
import derdasdieReducer from './slice/derdasdie';
import derdasdie_scoreReducer from './slice/derdasdie_score';

export const store = configureStore({
    reducer: {
        words: wordsReducer,
        wordModal: wordModalReducer,
        verbs: verbsReducer,
        ddd_words: derdasdieReducer,
        score: derdasdie_scoreReducer
    }
});