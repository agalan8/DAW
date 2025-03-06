import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./components/Cart";
import OtherPage from "./pages/OtherPage";

function App() {
  // Constante que representa al carrito inicializado como array vacío
  const [cart, setCart] = useState([]);
  // Array vacío donde estarán los productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                addToCart={addToCart}
                loading={loading}
                toggleCartVisibility={toggleCartVisibility}
              />
            }
          />
          <Route path="/other" element={<OtherPage />} />
        </Routes>

        {isCartVisible && (
          <Cart cart={cart} removeFromCart={removeFromCart} total={getTotal()} toggleCartVisibility={toggleCartVisibility} />
        )}
      </div>
    </Router>
  );
}

export default App;
