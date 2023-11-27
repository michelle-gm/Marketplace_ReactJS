import React from 'react';
import { useArticles } from '../contexts/ArticlesContext';


const ArticleItem = ({ article }) => {
  const { isAdminMode, setArticles } = useArticles();

  const handleToggleVisibility = () => {
    // Aquí implementas la lógica para cambiar la visibilidad del artículo
    setArticles(prevArticles =>
      prevArticles.map(a =>
        a.id === article.id ? { ...a, isVisible: !a.isVisible } : a
      )
    );
  };
  const userImageStatic = '/user.png';

  return (
    <div className="article-item">
      <img src={article.image} alt={article.name} className="article-image" />
      <div className="article-content">
        <h3 className="article-title">{article.name}</h3>
        <p className="article-description">Lorem ipsum dolor sit...</p> {/* Aquí va la descripción  */}
       <div className="article-store">
       <p className="store-name">{article.store}</p>
       <p className="article-price">${article.price}</p>
       </div>
        <p className="article-category">{article.category}</p> {/* categoria */}

        <div className="seller-info">
          <img src={userImageStatic} alt="Usuario" className="user-image" /> {/* Imagen del usuario */}
          <p className="user-name">{article.user}</p> {/* Nombre del usuario */}
        </div>
        <div className="article-rating">
          {'★'.repeat(article.rating)}
          {'☆'.repeat(5 - article.rating)}
        </div>
        {isAdminMode && (
          <button className="visibility-button" onClick={handleToggleVisibility}>
            {article.isVisible ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleItem;
