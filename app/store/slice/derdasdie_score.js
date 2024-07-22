
import { createSlice } from "@reduxjs/toolkit";

// const myConsole = (data) => {
//     const stateStringify = JSON.stringify(data);
//     console.log(JSON.parse(stateStringify));
// };

const initialState = {
    list: {
        score: { correct: 0, wrong: 0 },
        wordsWithArtikle: []
    },
    status: "idle"
};


const derdasdie_ScoreSlice = createSlice({
    name: "derdasdie_score",
    initialState,
    reducers: {
        addCorrect(state) {
            state.list.score.correct++;
        },
        addWrong(state) {
            state.list.score.wrong++;
        },
        addWord(state, { payload }) {
            state.list.wordsWithArtikle.unshift({ word: payload.word, isCorrect: payload.isCorrect })
        }
    }
});

export const { addCorrect, addWrong, addWord } = derdasdie_ScoreSlice.actions;

export default derdasdie_ScoreSlice.reducer;