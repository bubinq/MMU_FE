import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { useWindowResize } from "../hooks/useWindowResize";

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
              {
                id: 2,
                name: "Cardiology",
                image_url:
                  "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                id: 3,
                name: "Orthopedics",
                image_url:
                  "https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
            ],
          };
        }),
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);


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
    expect(heading).toHaveTextContent(/^Specialties$/)
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
