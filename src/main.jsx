import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path={"/"} element={<App />}>
            <Route index element={<Home />} />
            <Route path={"Login"} element={<Login />} />
          </Route>
        )
      )}
    />
  </React.StrictMode>
);
