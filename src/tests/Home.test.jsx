import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Error from "../pages/Error";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Specialists from "../pages/Specialists";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const mockSpecialtiesContent = {
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
          return mockSpecialtiesContent;
        }),
      },
      {
        path: "/specialists",
        element: <Specialists />,
        loader: vi.fn(() => {
          return {
            cities: {
              content: [{ id: 1, name: "Sofia", countryId: 1 }],
            },
            specialties: mockSpecialtiesContent,
            specialists: {
              content: {
                address: "123 Main Street, New York, USA",
                averageRating: 4.9,
                cityId: 3,
                countryId: 1,
                education: "Medical School A, Residency B",
                email: "john.doe@example.com",
                experience: 10,
                firstName: "Kiro",
                id: 1,
                imageUrl:
                  "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
                lastName: "Breika",
                specialtyId: 1,
                specialtyName: "Cardiology",
                summary: "Summary for Doctor John Doe",
              },
            },
          };
        }),
        action: vi.fn(() => {
          return [
            {
              address: "123 Main Street, New York, USA",
              averageRating: 4.9,
              cityId: 3,
              countryId: 1,
              education: "Medical School A, Residency B",
              email: "john.doe@example.com",
              experience: 10,
              firstName: "John",
              id: 1,
              imageUrl:
                "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
              lastName: "Doe",
              specialtyId: 2,
              specialtyName: "Cardiology",
              summary: "Summary for Doctor John Doe",
            },
          ];
        }),
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);

describe("HomePage Component", () => {
  beforeEach(() => {
    userEvent.setup();
    render(
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    );
  });

  test("renders HomePage", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/^Specialties$/);
  });
  test("renders Specialties Card1", () => {
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Ophthalmology",
    });
    expect(heading).toHaveTextContent(/^Ophthalmology$/);
  });
  test("renders Specialties Card2", () => {
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Cardiology",
    });
    expect(heading).toHaveTextContent(/^Cardiology$/);
  });
  test("renders Specialties Card3", () => {
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Orthopedics",
    });
    expect(heading).toHaveTextContent(/^Orthopedics$/);
  });
  test("redirects to Specialists page onClick", async () => {
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Cardiology",
    });
    await userEvent.click(heading);
    const specialistHeading = screen.getByRole("heading", {
      level: 1,
      name: "Specialists",
    });
    expect(specialistHeading).toBeInTheDocument();
  });
});
