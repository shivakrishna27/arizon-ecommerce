import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, adjustQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 border p-4 rounded">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
              <div className="flex-1 px-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => adjustQuantity(item.id, -1)} className="px-2">-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button onClick={() => adjustQuantity(item.id, 1)} className="px-2">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="text-right font-bold mt-4">Subtotal: ${subtotal.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
