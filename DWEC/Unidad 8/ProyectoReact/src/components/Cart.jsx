import React from "react";
import '../css/Cart.css';

function Cart({ cart, removeFromCart, total, toggleCartVisibility }) {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.title} - {item.price}€ x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))
        )}
        <h3>Total: ${total}</h3>
        <button className="close-cart-btn" onClick={toggleCartVisibility}>Cerrar</button>
      </div>
    </div>
  );
}

export default Cart;
