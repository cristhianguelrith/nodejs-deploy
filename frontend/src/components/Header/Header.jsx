import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <img src="https://oceanbrasil.com/assets/logo.svg" alt="Logo do Ocean" className="Logo" />
      <div className="Header_Links">
          <a href="#">Home</a>
          <a href="#">Criar</a>
      </div>
    </div>
  );
}

export default Header;