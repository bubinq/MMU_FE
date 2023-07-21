import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Specialists from "../pages/Specialists";
import Login from "../pages/Login"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/specialists",
        element: <Specialists />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
