
import { createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    list: {},
    originalList: {},  // Сохранение оригинального списка слов
    status: "idle"
};

const wordsSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        initializinState(state, action) {
            return state = { ...state, originalList: action.payload, list: action.payload }
        },
        filterByArticle(state, action) {
            const article = action.payload;
            if (article === false) {
                state.list = state.originalList;
            } else {
                const filteredList = {};
                for (const [letter, wordsArray] of Object.entries(state.originalList)) {
                    if (Array.isArray(wordsArray)) {
                        const filteredWords = wordsArray.filter(({ singular }) =>
                            singular.nominativ.startsWith(article)
                        );
                        if (filteredWords.length > 0) {
                            filteredList[letter] = filteredWords;
                        }
                    }
                }
                state.list = filteredList;
            }
        },
        search(state, action) {
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm === "") {
                state.list = state.originalList;
            } else {
                const filteredList = {};
                for (const [letter, wordsArray] of Object.entries(state.originalList)) {
                    if (Array.isArray(wordsArray)) {
                        const filteredWords = wordsArray.filter(({ word, wordRu }) =>
                            word.toLowerCase().includes(searchTerm) ||
                            wordRu.toLowerCase().includes(searchTerm)
                        );
                        if (filteredWords.length > 0) {
                            filteredList[letter] = filteredWords;
                        }
                    }
                }
                state.list = filteredList;
            }
        }
    }
});

export const { initializinState, filterByArticle, search } = wordsSlice.actions;

export default wordsSlice.reducer;