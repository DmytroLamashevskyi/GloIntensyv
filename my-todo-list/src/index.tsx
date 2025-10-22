import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import reportWebVitals from "./reportWebVitals";
import { ToDoListPage } from "./pages/ToDoListPage";
import { HomePage } from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToDoItem } from "./models/ToDoItem";
import { NotFoundPage } from "./pages/404";
import { ToDoItemPage } from "./pages/ToDoItemPage";
import { MainLayout } from "./layouts/MainLayout";
import { HelmetProvider } from "react-helmet-async";

const todoItems: ToDoItem[] = [
  {
    id: 0,
    text: "First",
    isDone: false,
  },
  {
    id: 1,
    text: "Second",
    isDone: true,
  },
  {
    id: 2,
    text: "TTT",
    isDone: false,
  },
  {
    id: 3,
    text: "SecRRRRond",
    isDone: true,
  },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage todoList={todoItems} /> },
        { path: "/list/:id", element: <ToDoItemPage todoList={todoItems} /> },
        { path: "/list", element: <ToDoListPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  { basename: "/app/" }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
);

reportWebVitals();
