import React from 'react';
import { useArticles } from '../contexts/ArticlesContext';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articlesPerPage, currentPage }) => {
  const { articles } = useArticles();

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="article-list">
      {displayedArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;