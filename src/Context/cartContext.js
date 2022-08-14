import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );
    setCartCount(count);
  }, [cartItem]);

  useEffect(() => {
    const count = cartItem.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
    setCartTotal(count);
  }, [cartItem]);

  const addCartItem = (productToAdd, cartItem) => {
    if (cartItem.map((item) => (item = item.id)).includes(productToAdd.id)) {
      return cartItem.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      return [...cartItem, { ...productToAdd, quantity: 1 }];
    }
  };

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(productToAdd, cartItem));
  };

  const removeCartItem = (cartItem, productToRemove) => {
    setCartItem(
      cartItem
        .map((cartItems) => {
          if (cartItems.id === productToRemove.id) {
            cartItems.quantity = cartItems.quantity - 1;
            return cartItems;
          } else return cartItems;
        })
        .filter((cartMapped) => cartMapped.quantity !== 0),
    );
  };

  const removeItemToCart = (productToRemove) => {
    removeCartItem(cartItem, productToRemove);
  };

  const forceRemoveItemToCart = (productToRemove) => {
    setCartItem(cartItem.filter((cartItems) => productToRemove !== cartItems));
  };

  const value = {
    toggle,
    setToggle,
    cartItem,
    setCartItem,
    addItemToCart,
    cartCount,
    removeItemToCart,
    forceRemoveItemToCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
