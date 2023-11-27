import React, { useState } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import { ArticlesProvider, useArticles } from "./contexts/ArticlesContext";

function App() {
  const { articles } = useArticles();
  const [currentPage, setCurrentPage] = React.useState(1);

  const articlesPerPage = 10;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <div className="message">
          <p>Los artículos más recientes son:</p>
        </div>
        <ArticlesProvider>
          <ArticleList
            articlesPerPage={articlesPerPage}
            currentPage={currentPage}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </ArticlesProvider>
      </div>
    </div>
  );
}

export default App;
