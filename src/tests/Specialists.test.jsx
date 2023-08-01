import Error from "../pages/Error.jsx";
import Layout from "../components/Layout.jsx";
import { vi, describe, beforeEach, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Specialists from "../pages/Specialists.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home.jsx";
import DoctorDetails, {
  loader as getDoctorDetails,
} from "../pages/DoctorDetails.jsx";

const mockSpecialtiesData = {
  content: [
    {
      id: 1,
      name: "Cardiology",
      image_url:
        "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Orthopedics",
      image_url:
        "https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Neurology",
      image_url:
        "https://img.freepik.com/free-photo/doctor-reading-brain-mri-x-ray-result_53876-13389.jpg?w=740&t=st=1677172789~exp=1677173389~hmac=2d0be25306f47a4f0b4aa04d50dac96dd242ad9af01f8b8a9e5ed90385ffaadc",
    },
  ],
};

const mockCitiesData = {
  content: [
    {
      id: 1,
      name: "Sofia",
      countryId: 1,
    },
    {
      id: 2,
      name: "Plovdiv",
      countryId: 1,
    },
    {
      id: 3,
      name: "Varna",
      countryId: 1,
    },
  ],
};

const mockDoctorsData = {
  content: [
    {
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
    },
    {
      id: 2,
      firstName: "Lisa",
      lastName: "Smith",
      email: "lisa.smith@example.com",
      summary: "Summary for Doctor Lisa Smith",
      experience: 8,
      education: "Medical School X, Residency Y",
      averageRating: 4.8,
      imageUrl:
        "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      address: "456 Oak Street, Sofia, Bulgaria",
      specialtyName: "Neurology",
      countryId: 1,
      specialtyId: 3,
      cityId: 1,
    },
    {
      id: 3,
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@example.com",
      summary: "Summary for Doctor Sarah Johnson",
      experience: 12,
      education: "Medical School C, Residency D",
      averageRating: 4.7,
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000",
      address: "789 Elm Street, Dobrich, Bulgaria",
      specialtyName: "Pediatrics",
      countryId: 1,
      specialtyId: 7,
      cityId: 9,
    },
  ],
};

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
        // index: true,
        element: <Home />,
        loader: vi.fn(() => {
          return mockSpecialtiesData;
        }),
      },
      {
        index: true,
        // path: "/specialists",
        element: <Specialists />,
        loader: vi.fn(() => {
          return {
            cities: mockCitiesData,
            specialties: mockSpecialtiesData,
            specialists: mockDoctorsData,
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
      {
        path: "/:id",
        element: <DoctorDetails />,
        loader: vi.fn(() => {
          return {
            doctor: mockSingleDoctor,
          };
        }),
      },
    ],
  },
];

const router = createBrowserRouter(mockRoutes);

describe("Specialists Page", () => {
  beforeEach(() => {
    userEvent.setup();
    render(
      <RouterProvider router={router}>
        <Specialists />
      </RouterProvider>
    );
  });

  test("renders Specialists", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Specialists");
  });

  test("renders Doctor Card1", () => {
    const doctor = mockDoctorsData.content[0];
    const heading = screen.getByRole("heading", {
      level: 2,
      name: `${doctor.firstName} ${doctor.lastName}`,
    });
    const specialty = screen.getByTestId(doctor.id);
    const location = screen.getByTestId(doctor.address);
    const rating = screen.getByTestId(doctor.averageRating);
    expect(heading).toHaveTextContent(/^John Doe$/);
    expect(specialty).toHaveTextContent(/^Cardiology$/);
    expect(location).toHaveTextContent(/^123 Main Street, Varna, Bulgaria$/);
    expect(rating).toHaveTextContent(/^4.9$/);
  });

  test("renders Doctor Card3", () => {
    const doctor = mockDoctorsData.content[2];
    const heading = screen.getByRole("heading", {
      level: 2,
      name: `${doctor.firstName} ${doctor.lastName}`,
    });
    const specialty = screen.getByTestId(doctor.id);
    const location = screen.getByTestId(doctor.address);
    const rating = screen.getByTestId(doctor.averageRating);
    expect(heading).toHaveTextContent(/^Sarah Johnson$/);
    expect(specialty).toHaveTextContent(/^Pediatrics$/);
    expect(location).toHaveTextContent(/^789 Elm Street, Dobrich, Bulgaria$/);
    expect(rating).toHaveTextContent(/^4.7$/);
  });

  test("navigate to details page when click on Card1", async () => {
    const doctor = mockDoctorsData.content[0];
    const card = screen.getByTestId(`link-${doctor.id}`);
    await userEvent.click(card);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/^Coming soon...$/);
  });

  test("navigate back to Specialists page when click on 'GO BACK' button on the Doc Details page", async () => {
    const button = screen.getByTestId("go-back-button");
    await userEvent.click(button);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Specialists");
  });
});
