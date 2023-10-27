import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./providers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles/styles.css";
import Header from "../widgets/Header/Header";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}
