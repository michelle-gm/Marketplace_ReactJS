import React from 'react';
import { useArticles } from '../contexts/ArticlesContext';
import ArticleItem from './ArticleItem';

const ArticleList = () => {
  const { articles } = useArticles();

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;