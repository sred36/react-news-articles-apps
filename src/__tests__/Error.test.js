import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Error from "../pages/Error"; // Adjust the import path as necessary

describe("Error Component", () => {
  test("renders correctly", () => {
    render(<Error />);

    const errorMessage = screen.getByText(/something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("has a heading with correct text", async () => {
    render(<Error />);

    const heading = screen.getByRole("heading", { level: 3 });
    await waitFor(() => {
      expect(heading).toHaveTextContent("something went wrong");
    });
  });
});
