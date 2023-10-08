import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Services from "./pages/services";
import Pagenotfound from "./pages/pagenotfound";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

let pages = [
  {
    path: "/",
    element: <App />,
    errorElement: <Pagenotfound />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/pagenotfound",
    element: <Pagenotfound />,
  },
];
const router = createBrowserRouter(pages);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
