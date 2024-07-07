import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ArticleList from "./ArticleList";
import { ArticleContext } from "../context/ArticleContext";

function ArticleContainer() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSelectedArticle } = useContext(ArticleContext);

  const { data, loading, error } = useFetch(
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=wEw070jGMNNUkqc2T9pwLEN3E7oIIiAQ"
  );

  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get("page");
    return page ? parseInt(page, 10) : 1;
  });

  const [searchTerm, setSearchTerm] = useState(() => {
    return searchParams.get("search") || "";
  });

  const articlesPerPage = 5;

  useEffect(() => {
    setSearchParams({ page: currentPage, search: searchTerm });
  }, [currentPage, searchTerm, setSearchParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    navigate(`/articles/${article.id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const filteredArticles = data.results.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <ArticleList
        articles={filteredArticles}
        onSelectArticle={handleSelectArticle}
        currentPage={currentPage}
        articlesPerPage={articlesPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default ArticleContainer;
