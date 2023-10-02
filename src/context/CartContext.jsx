import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProduct = (newProduct) => {
    const existingIndex = cartList.findIndex(
      (item) => item.id === newProduct.id
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cartList];
      updatedCart[existingIndex].quantity += newProduct.quantity;
      setCartList(updatedCart);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  const getTotalItems = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartList.reduce(
      (total, item) => total + item.quantity * item.precio,
      0
    );
  };

  const removeProduct = (productId) => {
    const updatedCart = cartList.filter((item) => item.id !== productId);
    setCartList(updatedCart);
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        getTotalItems,
        getTotalPrice,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
