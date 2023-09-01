import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Error from "../pages/Error";
import AuthPage from "../pages/AuthPage";
import AuthModal from "../components/Auth/AuthModal";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  EMAIL_VERIFIED,
  EXPIRED_MESSAGE,
  ERROR_MESSAGE,
  VERRIFIED_MESSAGE,
  ALREADY_VERIFIED,
  TOKEN_EXPIRED,
  ERROR_VERIFICATION,
} from "../constants";

const mockRoutes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <AuthPage />,
    children: [
      {
        path: `auth/confirm`,
        element: <AuthModal message={EMAIL_VERIFIED} />,
      },
      {
        path: "auth/verification-expired",
        element: (
          <AuthModal
            headingMessage={EXPIRED_MESSAGE}
            message={TOKEN_EXPIRED}
            isSuccessful={false}
          />
        ),
      },
      {
        path: "auth/error",
        element: (
          <AuthModal
            headingMessage={ERROR_MESSAGE}
            message={ERROR_VERIFICATION}
            isSuccessful={false}
          />
        ),
      },
      {
        path: "auth/already-verified",
        element: (
          <AuthModal
            headingMessage={VERRIFIED_MESSAGE}
            message={ALREADY_VERIFIED}
            isSuccessful={false}
          />
        ),
      },
    ],
  },
];

const router1 = createMemoryRouter(mockRoutes, {
  initialEntries: [`/auth/confirm`],
});
const router2 = createMemoryRouter(mockRoutes, {
  initialEntries: [`/auth/verification-expired`],
});
const router3 = createMemoryRouter(mockRoutes, {
  initialEntries: [`/auth/error`],
});
const router4 = createMemoryRouter(mockRoutes, {
  initialEntries: [`/auth/already-verified`],
});

describe("AuthModal Component", () => {
    beforeEach(() => {
        new URLSearchParams("token?ednodvetri")
    })
  test("AuthModal Successful verification renders", () => {
    render(
      <RouterProvider router={router1}>
        <AuthModal />
      </RouterProvider>
    );

    const successMsg = screen.getByText(
      /Your account was successfully verified./
    );
    expect(successMsg).toBeInTheDocument();
  });
  test("AuthModal Invalid token renders", () => {
    render(
      <RouterProvider router={router2}>
        <AuthModal />
      </RouterProvider>
    );

    const successMsg = screen.getByText(/The token has expired or is invalid!/);
    expect(successMsg).toBeInTheDocument();
  });
  test("AuthModal Unexpected error renders", () => {
    render(
      <RouterProvider router={router3}>
        <AuthModal />
      </RouterProvider>
    );
    const successMsg = screen.getByText(
      /An unexpected error has ocurred, please try again./
    );
    expect(successMsg).toBeInTheDocument();
  });
  test("AuthModal Already verified renders", () => {
    render(
      <RouterProvider router={router4}>
        <AuthModal />
      </RouterProvider>
    );
    const successMsg = screen.getByText(
      /Your account has already been verified!/
    );
    expect(successMsg).toBeInTheDocument();
  });
});
