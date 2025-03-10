import React from "react";
import '../css/Cart.css';

function Cart({ carrito, eliminarDelCarrito, total, alternarVisibilidadCarrito }) {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Carrito</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          carrito.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.title} - {item.price}€ x {item.cantidad}</p>
              <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </div>
          ))
        )}
        <h3>Total: {total}€</h3>
        <button className="close-cart-btn" onClick={alternarVisibilidadCarrito}>Cerrar</button>
      </div>
    </div>
  );
}

export default Cart;
