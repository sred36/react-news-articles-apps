import React from "react";
import ArticleList from "./ArticleList";
import data from "../__tests__/data.json";

describe("<ArticleList />", () => {
  it("renders", () => {
    const onPageChange = cy.spy().as("onPageChange");

    cy.mount(
      <ArticleList
        articles={data.results}
        currentPage="1"
        articlesPerPage="5"
        onPageChange={onPageChange}
      />
    );
  });
});
