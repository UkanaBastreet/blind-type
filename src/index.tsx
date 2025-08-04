import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { AuthPage } from "./features/auth/auth.page";
import { LoginForm } from "./features/auth/LoginForm";
import { RegisterForm } from "./features/auth/RegisterForm";
import App from "./app/App";

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
