import React from 'react';
import { useArticles } from '../contexts/ArticlesContext';

const ArticleItem = ({ article }) => {
  const { isAdminMode } = useArticles();

  const handleToggleVisibility = () => {
    // Aquí debes implementar la lógica para cambiar la visibilidad del artículo
    // Puedes utilizar setArticles del contexto para actualizar el estado de los artículos
  };

  return (
    <div className="article-item">
      <img src={article.image} alt={article.name} />
      <div>
        <h3>{article.name}</h3>
        <p>Precio: {article.price}</p>
        <p>Tienda: {article.store}</p>
        <p>Usuario: {article.user}</p>
        <p>Puntuación: {article.rating}</p>
        {isAdminMode && (
          <button onClick={handleToggleVisibility}>
            {article.isVisible ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleItem;