import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appointments from "../pages/Appointments";
import { loader as getAllSpecialties } from "../pages/Home";
import { getSpecialistsSettings } from "../pages/Specialists";
import Specialists, { loader as getSpecialistData } from "../pages/Specialists";

export const routes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getAllSpecialties,
      },
      {
        path: "/specialists",
        element: <Specialists />,
        loader: getSpecialistData,
        action: getSpecialistsSettings,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
