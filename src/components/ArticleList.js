import React from "react";
import ArticleTile from "./ArticleTile";

const ArticleList = ({
  articles,
  onSelectArticle,
  currentPage,
  articlesPerPage,
  onPageChange,
}) => {
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="article-container">
      {currentArticles.map((resultItem, resultIndex) => {
        let mediaList = resultItem ? resultItem.media : null;
        return (
          <div
            className="article-item"
            key={resultIndex}
            onClick={() => onSelectArticle(resultItem)}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            <ArticleTile article={resultItem} mediaList={mediaList} />
          </div>
        );
      })}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className="pagination-btn"
            key={index}
            onClick={() => onPageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
