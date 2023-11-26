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
    {
      id: 2,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 2',
      price: 19,
      store: 'Tienda B',
      user: 'Usuario2',
      rating: 4.5,
    },
    {
      id: 3,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 3',
      price: 15.99,
      store: 'Tienda C',
      user: 'Usuario3',
      rating: 4.5,
    },
    {
      id: 4,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 4',
      price: 11.99,
      store: 'Tienda D',
      user: 'Usuario4',
      rating: 4.5,
    },
    {
      id: 5,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 5',
      price: 4,
      store: 'Tienda E',
      user: 'Usuario5',
      rating: 4.5,
    },
    {
      id: 6,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 6',
      price: 8,
      store: 'Tienda F',
      user: 'Usuario6',
      rating: 4.5,
    },
    {
      id: 7,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 7',
      price: 8,
      store: 'Tienda G',
      user: 'Usuario7',
      rating: 4.5,
    },
    {
      id: 8,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 8',
      price: 8,
      store: 'Tienda H',
      user: 'Usuario8',
      rating: 4.5,
    },
    {
      id: 9,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 9',
      price: 8,
      store: 'Tienda I',
      user: 'Usuario9',
      rating: 4.5,
    },
    {
      id: 10,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 10',
      price: 8,
      store: 'Tienda J',
      user: 'Usuario10',
      rating: 4.5,
    },
    {
      id: 11,
      image: 'url_de_la_imagen_1.jpg',
      name: 'Artículo 11',
      price: 8,
      store: 'Tienda K',
      user: 'Usuario11',
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