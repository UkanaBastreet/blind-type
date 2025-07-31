import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { ErrorPage } from "./pages/404/404.page";
import { AuthPage } from "./pages/auth/auth.page";
import { LoginForm } from "./pages/auth/LoginForm";
import { RegisterForm } from "./pages/auth/RegisterForm";
import App from "./App";

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
