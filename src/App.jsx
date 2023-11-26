import React, { useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';
import { ArticlesProvider, useArticles } from './contexts/ArticlesContext';

function App() {
  const { articles } = useArticles();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="App">
      <h1>Catalogo de Artículos</h1>
      <ArticlesProvider>
        <ArticleList articles={displayedArticles} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </ArticlesProvider>
    </div>
  );
}

export default App;