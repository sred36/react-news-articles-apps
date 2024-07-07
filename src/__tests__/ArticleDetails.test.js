import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleDetails from "../components/ArticleDetails";
import { ArticleContext } from "../context/ArticleContext";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-mocked parts
  useParams: () => ({
    id: 1, // mock the params object as needed for your test case
  }),

  useNavigate: () => mockNavigate,
}));

describe("ArticleDetails Component", () => {
  const mockArticle = {
    id: 1,
    published_date: "2024-07-10",
    media: [{ "media-metadata": [{ url: "https://example.com/image.jpg" }] }],
    adx_keywords: "keyword1, keyword2",
  };

  it("renders article details when article is selected", async () => {
    render(
      <ArticleContext.Provider value={{ selectedArticle: mockArticle }}>
        <Router>
          <ArticleDetails></ArticleDetails>
        </Router>
      </ArticleContext.Provider>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Published Date: 2024-07-10")
      ).toBeInTheDocument();
      expect(screen.getByText("keyword1, keyword2")).toBeInTheDocument();
      expect(screen.getByText("Back")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument(); // Assuming ArticleTile renders an img element
    });
  });

  it("displays 'Article not found' when no article is selected or id does not match", async () => {
    render(
      <ArticleContext.Provider value={{ selectedArticle: null }}>
        <Router>
          <ArticleDetails></ArticleDetails>
        </Router>
      </ArticleContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Article not found")).toBeInTheDocument();
      expect(screen.queryByText("Published Date:")).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Back" })
      ).not.toBeInTheDocument();
    });
  });

  it("navigates back when 'Back' button is clicked", async () => {
    render(
      <ArticleContext.Provider value={{ selectedArticle: mockArticle }}>
        <Router>
          <ArticleDetails />
        </Router>
      </ArticleContext.Provider>
    );
    const backButton = screen.getByRole("button", { name: "Back" });
    fireEvent.click(backButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(-1); // Assuming you navigate back by -1
    });
  });
});
