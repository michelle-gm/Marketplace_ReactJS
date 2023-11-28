import React, { useState } from "react";
import { useArticles } from "../contexts/ArticlesContext";
import "./Header.css";

// Se agregan props para las funciones de agregar y ocultar
const Header = ({ onAddArticle,  onToggleVisibility }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { articles, setArticles } = useArticles();

  const toggleAdminMode = () => {
    // Cambiar el estado de isAdminMode
    setIsAdminMode(!isAdminMode);
    // Si desactivamos el modo de administrador, también queremos asegurarnos de ocultar el formulario
    if (isAdminMode) onToggleVisibility(false);
  };

  const handleDeactivateArticles = () => {
    // Cambiar la propiedad 'modoAdmin' en todos los artículos
    setArticles((prevArticles) =>
      prevArticles.map((article) => ({
        ...article,
        modoAdmin: !isAdminMode, // Cambia de true a false y viceversa
      }))
    );
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/online-shopping.png" alt="Logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button className="search-button">Buscar</button>
      </div>

      <ul className="nav-links">
        <li>
          <button className="admin-button" onClick={toggleAdminMode}>
            {isAdminMode ? "Modo Visitante" : "Modo Administrador"}
          </button>
        </li>
        {/* Botón Agregar visible solo en modo administrador */}
        {isAdminMode && (
          <li>
            {/* Al hacer clic, invocar la función onAddArticle pasada como prop */}
            <button className="add-button" onClick={() => onAddArticle(true)}>Agregar</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
