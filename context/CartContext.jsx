'use client'
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

let initailCartItems = [];
if (typeof window !== 'undefined') {
  initailCartItems = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [];
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initailCartItems);
  const [open, setIssOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const IncreseCartQuantity = (id) => {
    setCartItems((cuurItems) => {
      if (cuurItems.find((item) => item.id === id) == null) {
        return [...cuurItems, { id, quantity: 1 }];
      } else {
        return cuurItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const DecreseCartQuantity = (id) => {
    setCartItems((cuurItems) => {
      const item = cuurItems.find((item) => item.id === id);
      if (!item) {
        return cuurItems;
      }
      if (item.quantity === 1) {
        return cuurItems.filter((item) => item.id !== id);
      }
      return cuurItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((cuurItems) => cuurItems.filter((item) => item.id !== id));
  };

  const OpenCart = () =>{
    setIssOpen(!open);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        IncreseCartQuantity,
        DecreseCartQuantity,
        removeItemFromCart,
        open,
        OpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
