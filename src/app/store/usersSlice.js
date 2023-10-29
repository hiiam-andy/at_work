import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/constants/constants";

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const res = await axios(`${BASE_URL}/users`);
    const amount = res.data.filter((_, i) => i < 6);
    return amount;
  } catch (err) {
    console.log(err);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    archivedArray: [],
    isArchived: [],
    isActive: [],
  },
  reducers: {
    setArchivedArray: (state, action) => {
      state.archivedArray = action.payload;
    },
    setIsArchived: (state, action) => {
      state.isArchived = state.data.filter((el) => {
        return action.payload.includes(el.id);
      });
    },
    setIsActive: (state, action) => {
      state.isActive = state.data.filter((el) => {
        return !action.payload.includes(el.id);
      });
    },
    removeCard: (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        if (state.isActive.length === 0) {
          state.isActive = action.payload;
        }
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setIsArchived, setIsActive, setArchivedArray, removeCard } =
  usersSlice.actions;

export default usersSlice.reducer;
