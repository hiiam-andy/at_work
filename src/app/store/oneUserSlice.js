import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/constants/constants";

const userData = {
  name: "",
  nickname: "",
  email: "",
  city: "",
  phone: "",
  company: "",
};

export const fetchOneUser = createAsyncThunk(
  "oneUser/getOneUsers",
  async (id) => {
    try {
      const res = await axios(`${BASE_URL}/users/${id}`);
      console.log(res.data);
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
    userData,
  },
  reducers: {
    editUser: (state, action) => {
      state.userData = action.payload;
    },
  },
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
