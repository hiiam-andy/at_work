import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isActiveModal: false,
  },
  reducers: {
    setIsActiveModal: (state, action) => {
      state.isActiveModal = action.payload;
    },
  },
});

export const { setIsActiveModal } = modalSlice.actions;
export default modalSlice.reducer;
