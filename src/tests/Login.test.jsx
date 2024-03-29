import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Error from "../pages/Error";
import Layout from "../components/Layout";
import RouteGuard from "../guards/RouteGuard";
import Login from "../pages/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import authService from "../services/auth";

const mockData = { email: "peter@abv.bg", password: "123" };
const returnedData = { data: { accessToken: "123" } };
const mockError = { message: "error!" };

vi.mock("../services/auth", () => {
  return {
    default: {
      login: vi.fn(),
    }
  };
});


const sendDataToServer = async () => {
  try {
    const response = await authService.login(mockData);
    return response;
  } catch (error) {
    return error;
  }
};


const mockRoutes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: (
          <RouteGuard>
            <Login />
          </RouteGuard>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);

describe("LoginPage Component", () => {
  beforeEach(() => {
    userEvent.setup();
    render(
      <RouterProvider router={router}>
        <Login />
      </RouterProvider>
    );
  });

  test("renders LoginPage", async () => {
    const loginBtn = screen.getByLabelText("login-button");
    await userEvent.click(loginBtn);
    const loginHeading = screen.getByRole("heading", { level: 2 });
    expect(loginHeading).toHaveTextContent(/^Login$/);
  });
  test("submitting with empty email displays validation messages", async () => {
    const loginBtn = screen.getByLabelText("login-button");
    await userEvent.click(loginBtn);
    const submitBtn = screen.getByLabelText("login-submit");
    await userEvent.click(submitBtn);
    const emailValidationError = screen.getByLabelText("email-error");
    expect(emailValidationError).toHaveTextContent(
      /^Please enter your email address.$/
    );
  });
  test("submitting with empty password displays validation messages", async () => {
    const loginBtn = screen.getByLabelText("login-button");
    await userEvent.click(loginBtn);
    const submitBtn = screen.getByLabelText("login-submit");
    await userEvent.click(submitBtn);
    const passwordValidationError = screen.getByLabelText("password-error");
    expect(passwordValidationError).toHaveTextContent(
      /^Please enter your password.$/
    );
  });
  test("submitting with invalid email displays validation messages", async () => {
    const loginBtn = screen.getByLabelText("login-button");
    await userEvent.click(loginBtn);
    const emailField = screen.getByLabelText("email-field");
    await userEvent.type(emailField, "peter@@");
    const submitBtn = screen.getByLabelText("login-submit");
    await userEvent.click(submitBtn);
    const emailValidationError = screen.getByLabelText("email-error");
    expect(emailValidationError).toHaveTextContent(
      /^Please enter a valid email address.$/
    );
  });
  test("submitting with incorrect email and password displays validation messages", async () => {
    const loginBtn = screen.getByLabelText("login-button");
    await userEvent.click(loginBtn);
    const emailField = screen.getByLabelText("email-field");
    await userEvent.type(emailField, "peter@abv.bg");
    const passwordField = screen.getByLabelText("password-field");
    await userEvent.type(passwordField, "123");
    const submitBtn = screen.getByLabelText("login-submit");
    await userEvent.click(submitBtn);
    authService.login.mockRejectedValue({ message: "error!" });
    const result = await sendDataToServer();
    expect(result).toEqual(mockError);
  });
  test("submitting with correct email and password should log in user", async () => {
    const loginBtn = screen.getByLabelText("login-button");
    await userEvent.click(loginBtn);
    const emailField = screen.getByLabelText("email-field");
    await userEvent.type(emailField, "admin@gmail.com");
    const passwordField = screen.getByLabelText("password-field");
    await userEvent.type(passwordField, "!Admin123");
    const submitBtn = screen.getByLabelText("login-submit");
    await userEvent.click(submitBtn);
    authService.login.mockResolvedValue(returnedData);
    const result = await sendDataToServer();
    expect(result).toEqual(returnedData);
  });
});
