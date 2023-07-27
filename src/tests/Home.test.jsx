import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, test } from "vitest";
import "@testing-library/jest-dom";
import { expect } from "vitest";
import { router } from "../routes";
import { RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

// vi.mock("../hooks/useWindowResize", async () => {
//   const resize = await vi.importActual("../hooks/useWindowResize");
//   return {
//     ...resize,
//     useWindowResize: vi.fn(),
//   };
// });

describe("HomePage Component", () => {
  beforeEach(() => {
    render(
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    );
  });

  test("renders HomePage", () => {
    screen.debug();
    // const heading = screen.getByRole("heading", { level: 2 });
    // expect(heading).toHaveTextContent("Specialties");
  });
});
