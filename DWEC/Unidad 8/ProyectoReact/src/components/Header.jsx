import React from "react";
import Button from "./Button";
import '../css/Header.css';

function Header({ toggleCartVisibility }) {
  return (
    <header className="header">
      <h1 className="header-title">Tienda</h1>

      <Button
        text="Ver Carrito"
        onClick={toggleCartVisibility}
        styleClass="cart-button"
      />

      <Button
        text="Ir a Otra Página"
        to="/other"
        styleClass="other-page-button"
      />
    </header>
  );
}

export default Header;
