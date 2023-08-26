import './App.css';
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import productsData from '../data/products';

function App() {
  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <h1>Restaurant Menu</h1>
      <div className="product-list">
        {productsData.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
