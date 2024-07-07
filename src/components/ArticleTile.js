import ArticleImage from "./ArticleImage";

const ArticleTile = ({ article, mediaList, isDetails = false }) => {
  return (
    <>
      <div className="article-item-left">
        <h3>{article.title}</h3>
        <p>{article.abstract}</p>
      </div>
      {mediaList && (
        <ArticleImage
          title={article.title}
          mediaList={mediaList}
          isDetails={isDetails}
        />
      )}
    </>
  );
};
export default ArticleTile;
