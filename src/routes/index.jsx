import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import DoctorDetails, {
  loader as getDoctorDetails,
} from "../pages/DoctorDetails.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appointments, { getAppointmentsType } from "../pages/Appointments";
import AuthGuard from "../guards/AuthGuard";
import { loader as getAllSpecialties } from "../pages/Home";
import { getSpecialistsSettings } from "../pages/Specialists";
import Specialists, { loader as getSpecialistData } from "../pages/Specialists";
import { loader as checkTokenAvailability } from "../components/Auth/AuthResetForm";
import { loader as getConfirmationToken } from "../components/Auth/AuthModal";
import { loader as getAppointmentsData } from "../pages/Appointments";
import AuthPage from "../pages/AuthPage.jsx";
import AuthModal from "../components/Auth/AuthModal";
import AuthForm from "../components/Auth/AuthForm";
import AuthResetForm from "../components/Auth/AuthResetForm";
import ForgotConfirm from "../components/Auth/ForgotConfirm";
import UserAgreement from "../components/Auth/UserAgreement";
import PrivacyPolicy from "../components/Auth/PrivacyPolicy";
import {
  SUCCESSFULLY_REGISTERED,
  EMAIL_VERIFIED,
  TOKEN_EXPIRED,
  EXPIRED_MESSAGE,
  ERROR_MESSAGE,
  ERROR_VERIFICATION,
  VERRIFIED_MESSAGE,
  ALREADY_VERIFIED,
  SUCCESSFULLY_RESET,
  REQUEST_NEW_TOKEN,
} from "../constants";

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
        loader: getAppointmentsData,
        action: getAppointmentsType,
        shouldRevalidate: ({ currentUrl }) => {
          return currentUrl.pathname !== "/appointments";
        },
      },

      {
        path: "/login",
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthGuard>
            <Register />
          </AuthGuard>
        ),
      },
      {
        path: "/auth",
        element: <AuthPage />,
        children: [
          {
            path: "successful",
            element: <AuthModal message={SUCCESSFULLY_REGISTERED} />,
          },
          {
            path: "confirm",
            element: <AuthModal message={EMAIL_VERIFIED} />,
            loader: getConfirmationToken,
          },
          {
            path: "verification-expired",
            element: (
              <AuthModal
                headingMessage={EXPIRED_MESSAGE}
                message={TOKEN_EXPIRED}
                isSuccessful={false}
              />
            ),
          },
          {
            path: "user-agreement",
            element: <UserAgreement />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "error",
            element: (
              <AuthModal
                headingMessage={ERROR_MESSAGE}
                message={ERROR_VERIFICATION}
                isSuccessful={false}
              />
            ),
          },
          {
            path: "already-verified",
            element: (
              <AuthModal
                headingMessage={VERRIFIED_MESSAGE}
                message={ALREADY_VERIFIED}
                isSuccessful={false}
              />
            ),
          },
          {
            path: "reset",
            element: <AuthResetForm />,
            loader: checkTokenAvailability,
          },
          {
            path: "reset-success",
            element: <AuthModal message={SUCCESSFULLY_RESET} />,
          },
          {
            path: "reset-error",
            element: (
              <AuthModal
                headingMessage={EXPIRED_MESSAGE}
                message={REQUEST_NEW_TOKEN}
                isSuccessful={false}
                isReset={true}
              />
            ),
          },
          {
            path: "forgot-password",
            element: <AuthForm />,
          },
          {
            path: "forgot-confirm",
            element: <ForgotConfirm />,
          },
        ],
      },
    ],
  },
]);
