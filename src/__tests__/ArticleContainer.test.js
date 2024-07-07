import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ArticleContainer from "../components/ArticleContainer";
import { MemoryRouter as Router } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleContext";

describe("ArticleContainer Component", () => {
  it("renders loading state", async () => {
    // Mock useSearchParams
    const mockUseSearchParams = jest.fn(() => ({
      get: () => "",
    }));
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useSearchParams: mockUseSearchParams,
    }));

    render(
      <ArticleProvider>
        <Router>
          <ArticleContainer />
        </Router>
      </ArticleProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders articles after data fetching", async () => {
    const mockData = {
      results: [
        { id: 1, title: "Article 1", media: [] },
        { id: 2, title: "Article 2", media: [] },
      ],
    };
    const mResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    };
    global.fetch = jest.fn().mockResolvedValue(mResponse);
    render(
      <ArticleProvider>
        <Router>
          <ArticleContainer />
        </Router>
      </ArticleProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Article 1")).toBeInTheDocument();
    });
  });

  it("handles search term change", async () => {
    const mockData = {
      results: [
        { id: 1, title: "Article 1", media: [] },
        { id: 2, title: "Article 2", media: [] },
      ],
    };
    const mResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    };
    global.fetch = jest.fn().mockResolvedValue(mResponse);
    render(
      <ArticleProvider>
        <Router>
          <ArticleContainer />
        </Router>
      </ArticleProvider>
    );

    const searchInput = await screen.findByPlaceholderText("Search articles");
    fireEvent.change(searchInput, { target: { value: "Article 2" } });

    await waitFor(() => {
      expect(screen.getByText("Article 2")).toBeInTheDocument();
    });
  });
});
