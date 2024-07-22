import { iterateThroughValues } from "@/app/helpers/functions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    list: [],
    status: "idle"
};

export const fetchWordsNominative = createAsyncThunk(
    "words/fetchWords",
    async () => {
        const resp = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/derdasdieroute');
        const data = await resp.json();
        return data;
    });


const derdasdieSlice = createSlice({
    name: "derdasdie",
    initialState,
    reducers: {
        initializinState(state, action) {
            return state = { ...state, list: action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWordsNominative.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWordsNominative.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = iterateThroughValues(payload);
            })
            .addCase(fetchWordsNominative.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { initializinState } = derdasdieSlice.actions;

export default derdasdieSlice.reducer;