import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/HomePage.css';

function HomePage({ productos, agregarAlCarrito, cargando, alternarVisibilidadCarrito }) {
  return (
    <div className="home-page">
      <Header alternarVisibilidadCarrito={alternarVisibilidadCarrito} />

      {cargando ? (
        <p className="loading-text">Cargando productos...</p>
      ) : (
        <>
          <h2 className="products-header">Productos</h2>
          <div className="product-grid">
            {productos.map((producto) => (
              <div key={producto.id} className="product-card">
                <img src={producto.image} alt={producto.title} className="product-image" />
                <p className="product-title">{producto.title}</p>
                <p className="product-price">{producto.price}€</p>

                <Button
                  texto="Agregar al carrito"
                  onClick={() => agregarAlCarrito(producto)}
                  claseEstilo="add-to-cart-btn"
                />
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage;
