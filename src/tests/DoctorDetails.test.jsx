import Error from "../pages/Error.jsx";
import Layout from "../components/Layout.jsx";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import DoctorDetails from "../pages/DoctorDetails.jsx";

const mockSingleDoctor = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  summary: "Summary for Doctor John Doe",
  experience: 10,
  education: "Medical School A, Residency B",
  averageRating: 4.9,
  imageUrl:
    "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
  address: "123 Main Street, Varna, Bulgaria",
  specialtyName: "Cardiology",
  countryId: 1,
  specialtyId: 1,
  cityId: 3,
};

const mockRoutes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DoctorDetails />,
        loader: vi.fn(() => {
          return mockSingleDoctor;
        }),
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);

describe("Doctor Details Page", () => {
  beforeEach(() => {
    userEvent.setup();
    render(
      <RouterProvider router={router}>
        <DoctorDetails />
      </RouterProvider>
    );
  });
  test("renders Doctor's name", () => {
    const heading = screen.getByRole("heading", {
      level: 2,
    });
    const about = screen.getByRole("heading", {
      level: 3,
    });
    expect(heading).toHaveTextContent(/^John Doe$/);
    expect(about).toHaveTextContent(/^About John Doe$/);
  });
});
