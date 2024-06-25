
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    list: {},
    originalList: {},  // Сохранение оригинального списка слов
    status: "idle"
};

// export const fetchWords = createAsyncThunk(
//     "words/fetchWords",
//     async () => {
//         const resp = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/words');
//         const data = await resp.json();
//         console.log('data', data);
//         return data;
//     });

const wordsSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        initializinState(state, action) {
            return state = { ...state, originalList: action.payload, list: action.payload }
            // return state = action.payload
        },
        filterByArticle(state, action) {
            const article = action.payload;
            if (article === false) {
                state.list = state.originalList;
            } else {
                const filteredList = {};
                for (const [letter, wordsArray] of Object.entries(state.originalList)) {
                    if (Array.isArray(wordsArray)) { // Проверка на массив
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
                // Если строка поиска пуста, вернуть оригинальный список
                state.list = state.originalList;
            } else {
                // Фильтрация слов по `word` и `wordRu`
                const filteredList = {};
                for (const [letter, wordsArray] of Object.entries(state.originalList)) {
                    if (Array.isArray(wordsArray)) { // Проверка на массив
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
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchWords.pending, (state) => {
    //             state.status = "loading";
    //         })
    //         .addCase(fetchWords.fulfilled, (state, { payload }) => {
    //             state.status = "ready";
    //             state.list = payload;
    //             state.originalList = payload;  // Сохранение оригинального списка слов
    //         })
    //         .addCase(fetchWords.rejected, (state) => {
    //             state.status = "rejected";
    //         });
    // },
});

export const { initializinState, filterByArticle, search } = wordsSlice.actions;

export default wordsSlice.reducer;