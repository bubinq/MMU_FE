import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test } from "vitest";
import "@testing-library/jest-dom";
import { expect } from "vitest";
import { router } from "../routes";
import { RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useWindowResize } from "../hooks/useWindowResize";

vi.mock("react-router-dom", async () => {
  const router = await vi.importActual("react-router-dom");
  return {
    ...router,
    createBrowserRouter: vi.fn(() => {
      return router;
    }),
  };
});

vi.mock("../contexts/AuthContext", async () => {
  return {
    default: vi.fn(() => ({ user: { name: "Bob" } })),
  };
});

vi.mock("../hooks/useWindowResize", async () => {
  const resize = await vi.importActual("../hooks/useWindowResize");
  return {
    ...resize,
    useWindowResize: vi.fn(),
  };
});

describe("Navbar Component in desktop resolutions", () => {
  beforeEach(() => {
    useWindowResize.mockClear();
    useWindowResize.mockReturnValue({ width: 1080 });
    render(
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    );
  });

  test("renders Specialties Page", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Specialties");
  });
  test("renders logOut btn when user is logged in", () => {
    const logOutBtn = screen.getByLabelText("logout-button");
    expect(logOutBtn).toBeInTheDocument();
  });
  test("renders Appointments link when user is logged in", () => {
    const appointments = screen.getByLabelText("Appointments");
    expect(appointments).toBeInTheDocument();
  });
});
describe("Navbar Component in mobile resolutions", () => {
  beforeEach(() => {
    useWindowResize.mockClear();
    useWindowResize.mockReturnValue({ width: 390 });
    render(
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    );
  });
  test("burgerMenu shows on small resolutions", async () => {
    const burgerMenu = screen.getByLabelText("burger-menu");
    expect(burgerMenu).toBeInTheDocument();
  });
  test("burgerMenu opens dropdown onClick", async () => {
    const burgerMenu = screen.getByLabelText("burger-menu");
    await userEvent.click(burgerMenu);
    const navModal = screen.getByLabelText("navigation-modal");
    expect(navModal).toBeInTheDocument();
  });
  test("burgerMenu closes dropdown onClick", async () => {
    const burgerMenu = screen.getByLabelText("burger-menu");
    await userEvent.click(burgerMenu);
    const navModal = screen.getByLabelText("navigation-modal");
    await userEvent.click(burgerMenu);
    expect(navModal).not.toBeInTheDocument();
  });
});
