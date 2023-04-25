import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../Pages/HomePage";
import LessonPage from "../Pages/LessonPage";

export const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/lesson",
    element: <LessonPage />,
  },
]);
