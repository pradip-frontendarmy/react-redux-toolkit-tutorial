import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenConfirmationModal: false,
};

const confirmationModalSlice = createSlice({
  name: "confirmation-modal",
  initialState,
  reducers: {
    openConfirmationModal: (state) => {
      state.isOpenConfirmationModal = true;
    },
    closeConfirmationModal: (state) => {
      state.isOpenConfirmationModal = false;
    },
  },
});

export const { openConfirmationModal, closeConfirmationModal } =
  confirmationModalSlice.actions;

export default confirmationModalSlice.reducer;
