import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as hotelsLoader } from "./App.jsx";
import HotelPage from "./HotelPage.jsx";
import { loader as hotelLoader } from "./HotelPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: hotelsLoader,
  },
  {
    path: "hotels/:hotelId",
    element: <HotelPage />,
    loader: hotelLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
