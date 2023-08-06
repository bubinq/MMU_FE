import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import DoctorDetails, {
  loader as getDoctorDetails,
} from "../pages/DoctorDetails.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appointments from "../pages/Appointments";
import RouteGuard from "../guards/RouteGuard";
import { loader as getAllSpecialties } from "../pages/Home";
import { getSpecialistsSettings } from "../pages/Specialists";
import Specialists, { loader as getSpecialistData } from "../pages/Specialists";
import SuccessfullyRegistered from "../pages/SuccessfullyRegistered.jsx";

export const router = createBrowserRouter([
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
        path: "/specialists/:id",
        element: <DoctorDetails />,
        loader: getDoctorDetails,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/login",
        element: (
          <RouteGuard>
            <Login />
          </RouteGuard>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register/successful",
        element: <SuccessfullyRegistered />
      }
    ],
  },
]);
