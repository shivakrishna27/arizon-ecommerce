import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const item = prev.find((item) => item.id === product.id);
      return item
        ? prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const adjustQuantity = (id, delta) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, adjustQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
