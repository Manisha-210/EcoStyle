import React from 'react';
import Cartc from '../components/Cartc';

const CartPage = ({ cartItems, clearCart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cartc cartItems={cartItems} clearCart={clearCart} />
    </div>
  );
};

export default CartPage;
