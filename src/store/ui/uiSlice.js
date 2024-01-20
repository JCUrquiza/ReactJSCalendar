import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: () => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: () => {
            state.isDateModalOpen = false;
        }
    },
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
