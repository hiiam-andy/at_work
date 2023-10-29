import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/AppRouter";
import { useDispatch } from "react-redux";

import "./styles/styles.css";
import Header from "../widgets/Header/Header";
import { fetchUsers } from "./store/usersSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}
