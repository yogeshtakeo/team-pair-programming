import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import Client from "../src/pages/Client.tsx";
import Error from "../src/pages/Error.tsx";
// import Form from "../src/pages/Form.tsx";
import Home from "../src/pages/Home.tsx";
import Add from "./pages/Add.tsx";
import FirstVisit from "./pages/FirstVisit.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <FirstVisit /> },
      // { path: "/client", element: <Client /> },
      // { path: "/form", element: <Form /> },
      { path: "/home", element: <Home /> },
      { path: "/add", element: <Add /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
