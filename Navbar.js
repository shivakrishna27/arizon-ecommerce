import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Arizon</Link>
      <div className="flex space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({itemCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
