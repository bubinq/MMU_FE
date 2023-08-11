import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Error from "../pages/Error";
import Layout from "../components/Layout";
import RouteGuard from "../guards/RouteGuard";
import Login from "../pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    const loginHeading = screen.getByRole("heading", {level: 2});
    expect(loginHeading).toHaveTextContent(/^Login$/)
  });
});
