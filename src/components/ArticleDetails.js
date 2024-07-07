import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleTile from "./ArticleTile";
import { ArticleContext } from "../context/ArticleContext";

const ArticleDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedArticle } = useContext(ArticleContext);

  if (!selectedArticle || selectedArticle.id !== parseInt(id)) {
    return <div>Article not found</div>;
  }

  const mediaList = selectedArticle.media || [];

  return (
    <>
      <div className="article-details">
        <button className="article-back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="article-date">
          Published Date: {selectedArticle.published_date}
        </div>
        {mediaList.length > 0 && (
          <ArticleTile
            article={selectedArticle}
            mediaList={mediaList}
            isDetails={true}
          />
        )}
        <div className="article-keywords">{selectedArticle.adx_keywords}</div>
      </div>
    </>
  );
};

export default ArticleDetails;
