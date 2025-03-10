import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./components/Cart";
import OtherPage from "./pages/OtherPage";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [esCarritoVisible, setEsCarritoVisible] = useState(false);

  const urlApi = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoPrevio) => {
      const itemExiste = carritoPrevio.find((item) => item.id === producto.id);
      if (itemExiste) {
        return carritoPrevio.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...carritoPrevio, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((carritoPrevio) => carritoPrevio.filter((item) => item.id !== id));
  };

  const obtenerTotal = () => {
    const total = carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
    return total.toFixed(2);
  };

  const alternarVisibilidadCarrito = () => {
    setEsCarritoVisible((prev) => !prev);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                productos={productos}
                agregarAlCarrito={agregarAlCarrito}
                cargando={cargando}
                alternarVisibilidadCarrito={alternarVisibilidadCarrito}
              />
            }
          />
          <Route path="/other" element={<OtherPage />} />
        </Routes>

        {esCarritoVisible && (
          <Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} total={obtenerTotal()} alternarVisibilidadCarrito={alternarVisibilidadCarrito} />
        )}
      </div>
    </Router>
  );
}

export default App;
