import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ addToCart }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Products;
