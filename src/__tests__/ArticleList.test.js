import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

describe("ArticleList Component", () => {
  const mockArticles = [
    { id: 1, title: "Article 1", abstract: "Abstract 1" },
    { id: 2, title: "Article 2", abstract: "Abstract 2" },
  ];

  it("renders articles correctly", async () => {
    render(
      <ArticleList
        articles={mockArticles}
        onSelectArticle={() => {}}
        currentPage={1}
        articlesPerPage={5}
        onPageChange={() => {}}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("Article 1")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Abstract 2")).toBeInTheDocument();
    });
  });

  it("handles article selection", () => {
    const onSelectArticle = jest.fn();

    render(
      <ArticleList
        articles={mockArticles}
        onSelectArticle={onSelectArticle}
        currentPage={1}
        articlesPerPage={5}
        onPageChange={() => {}}
      />
    );

    fireEvent.click(screen.getByText("Article 1"));

    expect(onSelectArticle).toHaveBeenCalledWith(mockArticles[0]);
  });

  it("displays pagination buttons", async () => {
    render(
      <ArticleList
        articles={mockArticles}
        onSelectArticle={() => {}}
        currentPage={1}
        articlesPerPage={1}
        onPageChange={() => {}}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
