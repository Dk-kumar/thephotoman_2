import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/router";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter>
      <AppRouter />
    </BrowserRouter> */}
    <RouterProvider router={AppRouter} />
  </Provider>
);
