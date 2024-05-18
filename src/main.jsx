import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import FirstPage from "./components/pages/Homepage/firstpage";
import Action from "./components/pages/actionpage/action";
import Recomendation from "./components/pages/reccommendation/recom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/explore",
    element: <FirstPage />,
  },
  {
    path: "action",
    element: <Action />,
  },
  {
    path: "recommendation",
    element: <Recomendation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
