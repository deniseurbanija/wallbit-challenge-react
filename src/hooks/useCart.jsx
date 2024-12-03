import { useState, useEffect } from "react";

export const useCart = () => {
  // Initial cart state
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [creationDate, setCreationDate] = useState(() => {
    const savedDate = localStorage.getItem("cartCreationDate");
    return savedDate ? new Date(savedDate) : new Date();
  });

  // cart localStorage
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    localStorage.setItem("cartCreationDate", creationDate.toISOString());
  }, [cart, creationDate]);

  // add product to cart
  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCreationDate(new Date());
  };

  return {
    cart,
    addToCart,
    creationDate,
    clearCart,
  };
};

export default useCart;
