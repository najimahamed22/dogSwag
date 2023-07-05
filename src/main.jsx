import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Leyout/Main";
import VatCheatLeyOut from "./Leyout/VatCheatLeyout";
import Cheat from "./Components/VetCheat/Cheat";
import DoctorDettiles from "./Components/VetCheat/DoctorDettiles";
import DoctorCheat from "./Components/VetCheat/DoctorCheat";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/vatCheat",
    element: <VatCheatLeyOut />,
    children: [
      {
        path: "cheat",
        element: <Cheat />,
      },
      {
        path: "cheat/:id",
        element: <DoctorDettiles />,
      },
      {
        path: "cheat/:id/:id",
        element: <DoctorCheat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
