import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import NavModal from "../components/NavModal";
import { useWindowResize } from "../hooks/useWindowResize";
import useAuth from "../contexts/AuthContext";

const mockRoutes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: vi.fn(() => {
          return {
            content: [
              {
                id: 1,
                name: "Ophthalmology",
                image_url:
                  "https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
            ],
          };
        }),
      },
    ],
  },
];

vi.mock("../contexts/AuthContext", async () => {
  const authProvider = await vi.importActual("../contexts/AuthContext");
  return {
    ...authProvider,
    default: vi.fn(() => ({
      user: { accessToken: "123", isMenuOpened: false },
      setUser: vi.fn(),
      handleMenuClick: vi.fn(),
    })),
  };
});

const router = createBrowserRouter(mockRoutes);

vi.mock("../hooks/useWindowResize", async () => {
  const resize = await vi.importActual("../hooks/useWindowResize");
  return {
    ...resize,
    useWindowResize: vi.fn(),
  };
});

describe("Navbar Component in desktop resolutions", () => {
  beforeEach(() => {
    userEvent.setup({ advanceTimers: 1000 });
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
    expect(heading).toHaveTextContent(/^Specialties$/);
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
});

describe("NavModal Component in mobile resolutions", () => {
  beforeEach(() => {
    useWindowResize.mockClear();
    useWindowResize.mockReturnValue({ width: 390 });
    useAuth.mockClear();
    useAuth.mockReturnValue({
      isMenuOpened: true,
      user: { accessToken: "123" },
    });
    render(
      <RouterProvider router={router}>
        <NavModal />
      </RouterProvider>
    );
  });
  test("NavModal component opens when menu is opened", async () => {
    const navModal = screen.getByLabelText("navigation-modal");
    expect(navModal).toBeInTheDocument();
  });
});

describe("NavModal Component in mobile resolutions", () => {
  beforeEach(() => {
    useWindowResize.mockClear();
    useWindowResize.mockReturnValue({ width: 390 });
    useAuth.mockClear();
    useAuth.mockReturnValue({
      isMenuOpened: false,
      user: { accessToken: "" },
    });
    render(
      <RouterProvider router={router}>
        <NavModal />
      </RouterProvider>
    );
  });
  test("NavModal not present when menu is closed", async () => {
    const navModal = screen.queryByLabelText("navigation-modal");
    expect(navModal).toBeNull();
  });
});
