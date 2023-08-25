import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Error from "../pages/Error";
import AuthResetForm from "../components/Auth/AuthResetForm";
import AuthPage from "../pages/AuthPage";
import AuthModal from "../components/Auth/AuthModal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SUCCESSFULLY_RESET } from "../constants";
import authService from "../services/auth";


vi.mock("../services/auth", () => {
  return {
    default: {
      changePassword: vi.fn(),
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
        element: <AuthResetForm />,
      },
      {
        path: "auth/reset-success",
        element: <AuthModal message={SUCCESSFULLY_RESET} />,
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);

describe("AuthResetForm Component", () => {
  beforeEach(() => {
    render(
      <RouterProvider router={router}>
        <AuthResetForm />
      </RouterProvider>
    );
  });

  test("AuthResetForm Component renders", () => {
    const resetHeading = screen.getByRole("heading", { level: 2 });
    expect(resetHeading).toHaveTextContent(/Reset Password/);
  });
  test("AuthResetForm Component show validation messages on less than 8 characters password", async () => {
    const passInput = screen.getByLabelText("password");
    await userEvent.type(passInput, "!123");
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    const passValidationMessage = screen.getByText(
      /Password must be at least 8 characters long./
    );
    expect(passValidationMessage).toBeInTheDocument();
  });
  test("AuthResetForm Component show validation messages on incorrect password", async () => {
    const passInput = screen.getByLabelText("password");
    await userEvent.type(passInput, "!12345678");
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    const passValidationMessage = screen.getByText(
      /Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols./
    );
    expect(passValidationMessage).toBeInTheDocument();
  });
  test("AuthResetForm Component show validation messages on unmatching passwords", async () => {
    const passInput = screen.getByLabelText("password");
    const resetInput = screen.getByLabelText("matchingPassword");
    await userEvent.type(passInput, "!12345678");
    await userEvent.type(resetInput, "!1234567");
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    const passValidationMessage = screen.getByText(
      /Those passwords didn't match. Please try again./
    );
    expect(passValidationMessage).toBeInTheDocument();
  });
  test("AuthResetForm Component makes a successful request on valid passwords", async () => {
    const passInput = screen.getByLabelText("password");
    const resetInput = screen.getByLabelText("matchingPassword");
    await userEvent.type(passInput, "!Admin123");
    await userEvent.type(resetInput, "!Admin123");
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    authService.changePassword.mockResolvedValue("Success");
    const successMessage = screen.getByText(SUCCESSFULLY_RESET);
    expect(successMessage).toBeInTheDocument();
  });
});
