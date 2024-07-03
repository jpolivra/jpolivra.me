import ReactDOM from "react-dom/client";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blog } from "./screens/Blog";
import ThemeProvider from "@providers/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
