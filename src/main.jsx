import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import ContactMe from "./components/pages/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
