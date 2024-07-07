import React from "react";
import ArticleImage from "./ArticleImage";

describe("<ArticleImage />", () => {
  it("renders", () => {
    const mockMediaImageList = [
      {
        caption:
          "President Biden, with his wife, Jill, arriving in New York on Saturday for a campaign reception. His campaign has been in a battle mode to reassure donors and supporters.",

        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-thumbStandard.jpg",
          },
        ],
      },
      {
        caption:
          "President Biden, with his wife, Jill, arriving in New York on Saturday for a campaign reception. His campaign has been in a battle mode to reassure donors and supporters.",

        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2024/06/30/multimedia/30pol-inside-biden-01-qhcz/30pol-inside-biden-01-qhcz-thumbStandard.jpg",
          },
        ],
      },
    ];
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ArticleImage
        mediaList={mockMediaImageList}
        title="Biden’s Family Tells Him to Keep Fighting as They Huddle at Camp David"
      />
    );
  });
});
