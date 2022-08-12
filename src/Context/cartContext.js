import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);

  const value = { toggle, setToggle, cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
