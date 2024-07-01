import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const wordModalSlice = createSlice({
    name: 'wordModal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal } = wordModalSlice.actions;
export default wordModalSlice.reducer;