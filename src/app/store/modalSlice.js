import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isActive: false,
  },
  reducers: {
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = modalSlice.actions;
export default modalSlice.reducer;
