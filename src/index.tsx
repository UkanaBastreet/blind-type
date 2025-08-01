import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import App from "./App";
import { ErrorPage } from "./Pages/404/404.page";
import { AuthPage } from "./Pages/auth/auth.page";
import { LoginForm } from "./Pages/auth/LoginForm";
import { RegisterForm } from "./Pages/auth/RegisterForm";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "/auth/login", element: <LoginForm /> },
      { path: "/auth/register", element: <RegisterForm /> },
    ],
  },
  {
    path: "/training",
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
