import React, { useState, useContext } from 'react';
import { useArticles } from '../contexts/ArticlesContext';
import './AddArticleForm.css';

const AddArticleForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const { articles, setArticles } = useArticles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { name, price, store, description, image };
    if (isEditing) {
      // Lógica para actualizar el artículo seleccionado...
    } else {
      setArticles((prevArticles) => [...prevArticles, newArticle]);
    }
    // Restablecer los estados...
    setName('');
    setPrice('');
    setStore('');
    setDescription('');
    setImage('');
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleAddClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="form-container">
     <div className="button-container">
    <button className='botoncito' onClick={handleAddClick}>Agregar Artículo</button>
    <button className='botoncito2' onClick={handleEditClick}>Editar Artículo</button>
      </div>

      <form onSubmit={handleSubmit}>
        {isEditing && (
          <>
            <label htmlFor="selectedArticle">Elegir Artículo:</label>
            <select
              id="selectedArticle"
              value={selectedArticle}
              onChange={(e) => setSelectedArticle(e.target.value)}
            >
              {articles.map((article, index) => (
                <option key={index} value={article.name}>{article.name}</option>
              ))}
            </select>
          </>
        )}

        <label htmlFor="name">Nombre del artículo:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del artículo"
        />

        <label htmlFor="price">Precio:</label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="$"
        />

        <label htmlFor="store">Tienda:</label>
        <input
          id="store"
          type="text"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          placeholder="Tienda"
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
        ></textarea>

        <label htmlFor="image">Imagen del producto:</label>
        <input
          id="image"
          type="file"
          onChange={handleImageChange}
        />

        <button type="submit">{isEditing ? 'Actualizar Artículo' : 'Agregar Artículo'}</button>
      </form>
    </div>
  );
};

export default AddArticleForm;

