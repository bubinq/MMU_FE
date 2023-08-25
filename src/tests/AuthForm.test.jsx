import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Error from "../pages/Error";
import AuthForm from "../components/Auth/AuthForm";
import AuthPage from "../pages/AuthPage";
import ForgotConfirm from "../components/Auth/ForgotConfirm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import authService from "../services/auth";

vi.mock("../services/auth", () => {
  return {
    default: {
      forgottenPassword: vi.fn(),
    },
  };
});

const mockRoutes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <AuthForm />,
      },
      {
        path: "auth/forgot-confirm",
        element: <ForgotConfirm />,
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);

describe("AuthForm Component", () => {
  beforeEach(() => {
    render(
      <RouterProvider router={router}>
        <AuthForm />
      </RouterProvider>
    );
  });

  test("AuthForm Component renders", () => {
    const emailField = screen.getByRole("textbox");
    expect(emailField).toBeInTheDocument();
  });
  test("AuthForm Component renders email validation messages", async () => {
    const emailField = screen.getByRole("textbox");
    await userEvent.type(emailField, "@@2abc");
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    const validationMessage = screen.getByLabelText("email-error");
    expect(validationMessage).toHaveTextContent(
      /Please enter a valid email address./
    );
  });
  test("AuthForm Component sends you to auth confirm on valid data", async () => {
    const emailField = screen.getByRole("textbox");
    await userEvent.type(emailField, "test@gmail.com");
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    authService.forgottenPassword.mockResolvedValue("Success");
    const successText = screen.getByText("test@gmail.com");
    expect(successText).toBeInTheDocument();
  });
});
