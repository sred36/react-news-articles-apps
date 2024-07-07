import React from "react";
import ArtileImageElement from "./ArticleImageElement";

describe("<ArtileImageElement />", () => {
  it("renders", () => {
    const mockMediaImageList = [
      {
        url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-thumbStandard.jpg",
      },
      {
        url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-mediumThreeByTwo210.jpg",
      },
      {
        url: "https://static01.nyt.com/images/2024/06/30/multimedia/30dc-biden1-cqjf/30dc-biden1-cqjf-mediumThreeByTwo440.jpg",
      },
    ];

    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ArtileImageElement
        mediaImageLIst={mockMediaImageList}
        title="Biden’s Family Tells Him to Keep Fighting as They Huddle at Camp David"
        uniqueId="1"
        isDetails="true"
      />
    );
  });
});
