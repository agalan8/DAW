import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/HomePage.css';

function HomePage({ products, addToCart, loading, toggleCartVisibility }) {
  return (
    <div className="home-page">
      <Header toggleCartVisibility={toggleCartVisibility} />

      {loading ? (
        <p className="loading-text">Cargando productos...</p>
      ) : (
        <>
          <h2 className="products-header">Productos</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <p className="product-title">{product.title}</p>
                <p className="product-price">{product.price}€</p>

                <Button
                  text="Agregar al carrito"
                  onClick={() => addToCart(product)}
                  styleClass="add-to-cart-btn"
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
