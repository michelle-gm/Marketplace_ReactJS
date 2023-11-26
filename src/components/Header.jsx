import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/public/online-shopping.png" alt="Logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button className="search-button">Buscar</button>
        <button className="categories-button">Categorías</button>
      </div>
      
      <ul className="nav-links">
        <li>
          <button className="admin-button">Modo Administrador</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
