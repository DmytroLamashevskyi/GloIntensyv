import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/404";
import { ViewListPage } from "./pages/ViewListPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ToDoItemPage } from "./pages/ToDoItemPage";
import { MainLayout } from "./layouts/MainLayout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <ToDoListPage /> },
        {
          path: "/list",
          element: <ViewListPage />,
        },
        {
          path: "/list/:id",
          element: <ToDoItemPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  { basename: "/" }
);
