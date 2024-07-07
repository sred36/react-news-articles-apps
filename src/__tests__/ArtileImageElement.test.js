import React from "react";
import { screen, waitFor, render } from "@testing-library/react";
import ArticleImageElement from "../components/ArticleImageElement";

describe("ArtileImageElement Component", () => {
  const mockMediaImageList = [
    { "media-metadata": [{ url: "https://example.com/image.jpg" }] },
    { "media-metadata": [{ url: "https://example.com/image2.jpg" }] },
  ];

  it("renders image element correctly", async () => {
    render(
      <ArticleImageElement
        mediaImageLIst={mockMediaImageList}
        title="Test Article"
      />
    );

    await waitFor(() => {
      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
