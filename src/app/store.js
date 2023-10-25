import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./store/usersSlice";
import oneUserSlice from "./store/oneUserSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
    oneUser: oneUserSlice,
  },
});
