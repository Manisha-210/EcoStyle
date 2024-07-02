import  { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products';
import Navbarc from './components/Navbarc/Navbarc'
import Cart from './Pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbarc />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} clearCart={clearCart} />} />
      </Routes>
    </Router>
  );
};
export default App;