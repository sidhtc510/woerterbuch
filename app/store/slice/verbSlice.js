import { createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    list: [],
    originalList: [],  // Сохранение оригинального списка слов
    status: "idle"
};

const verbSlice = createSlice({
    name: "verbs",
    initialState,
    reducers: {
        initializinState(state, action) {
            return state = { ...state, originalList: action.payload, list: action.payload };
        },
        searchVerb(state, action) {
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm === "") {
                state.list = state.originalList;
            } else {
                state.list = state.originalList.filter(({ verb, translation }) =>
                    verb.toLowerCase().includes(searchTerm) ||
                    translation.toLowerCase().includes(searchTerm)
                );
            }
        }
    }
});

export const { initializinState, searchVerb } = verbSlice.actions;

export default verbSlice.reducer;