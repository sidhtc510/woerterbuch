import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const myConsole = (data) => {
//     const stateStringify = JSON.stringify(data);
//     console.log(JSON.parse(stateStringify));
// };

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

function iterateThroughValues(obj) {
    const allSingularValues = []
    for (const key in obj) {
        if (key !== '_id') { // Skip the "_id" property
            const values = obj[key];
            for (const value of values) {
                if (value.singular) {
                    allSingularValues.push(value.singular.nominativ); // Push the singular value
                } else if (typeof value === 'object') {
                    iterateThroughValues(value); // Recursively iterate if nested object
                }
            }
        }
    }
    return allSingularValues;
}


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