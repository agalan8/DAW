import React from "react";
import Button from "./Button";
import '../css/Header.css';

function Header({ alternarVisibilidadCarrito }) {
  return (
    <header className="header">
      <h1 className="header-title">Tienda</h1>

      <Button
        texto="Ver Carrito"
        onClick={alternarVisibilidadCarrito}
        claseEstilo="cart-button"
      />

      <Button
        texto="Ir a Otra Página"
        to="/other"
        claseEstilo="other-page-button"
      />
    </header>
  );
}

export default Header;
