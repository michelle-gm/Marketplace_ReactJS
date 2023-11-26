import React, { createContext, useContext, useState } from 'react';

const ArticlesContext = createContext();

export const useArticles = () => {
  return useContext(ArticlesContext);
};

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 1',
      price: 19.99,
      store: 'Tienda A',
      user: 'Usuario1',
      rating: 4.5,
    },
    // Agrega más artículos según tus necesidades
  ]);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};