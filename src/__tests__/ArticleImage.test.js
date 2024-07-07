import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ArticleImage from "../components/ArticleImage";

describe("ArticleImage Component", () => {
  const mockMediaList = [
    { "media-metadata": [{ url: "https://example.com/image.jpg" }] },
    { "media-metadata": [{ url: "https://example.com/image2.jpg" }] },
  ];

  it("renders images correctly", async () => {
    render(<ArticleImage title="Test Article" mediaList={mockMediaList} />);

    // Use waitFor to wait for images to appear in the DOM
    await waitFor(() => {
      expect(screen.getAllByRole("img")).toHaveLength(2);
    });
  });

  // Add more test cases as needed
});
