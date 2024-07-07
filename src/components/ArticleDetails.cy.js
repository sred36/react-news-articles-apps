import React from "react";
import { MemoryRouter } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

describe("<ArticleDetails />", () => {
  it("renders", () => {
    const mockArticle = {
      id: 100000009548133,
      published_date: "2024-07-10",
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "President Biden on Saturday with the first lady, Jill Biden, and his granddaughters Finnegan and Natalie Biden.",
          copyright: "Haiyun Jiang for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      adx_keywords:
        "Debates (Political);Presidential Election of 2024;Polls and Public Opinion;United States Politics and Government;Biden, Joseph R Jr;Democratic Party",
    };

    const wrapped = (
      <ArticleContext.Provider value={{ selectedArticle: mockArticle }}>
        <MemoryRouter initialEntries={["/articles/100000009548133"]}>
          <Routes>
            <Route
              element={<ArticleDetails />}
              path={"/articles/100000009548133"}
            />
          </Routes>
        </MemoryRouter>
      </ArticleContext.Provider>
    );

    // see: https://on.cypress.io/mounting-react
    cy.mount(wrapped);
  });
});
