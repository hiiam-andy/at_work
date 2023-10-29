import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/constants/constants";

export const fetchOneUser = createAsyncThunk(
  "oneUser/getOneUsers",
  async (id) => {
    try {
      const res = await axios(`${BASE_URL}/users/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const oneUserSlice = createSlice({
  name: "oneUser",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOneUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default oneUserSlice.reducer;
