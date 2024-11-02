import { Outlet, createBrowserRouter } from "react-router-dom";
import Catalog from "./pages/Catalog";
import FavoritesList from "./pages/FavoritesList";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Catalog />,
      },
      {
        path: "/favorites",
        element: <FavoritesList />,
      },
    ],
  },
]);

export default router;
