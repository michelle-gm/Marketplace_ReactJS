import React, { useState, useContext } from "react";
import { useArticles } from "../contexts/ArticlesContext";
import "./Header.css";

const Header = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { articles, setArticles } = useArticles();

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
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
      </ul>
    </nav>
  );
};

export default Header;
