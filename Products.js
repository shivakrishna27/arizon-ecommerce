// File: src/pages/Products.js
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow hover:shadow-md">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h3 className="mt-2 text-sm font-bold">{product.title}</h3>
          <p className="text-blue-600 font-semibold">${product.price}</p>
          <button onClick={() => addToCart(product)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;