import { useState, useEffect } from "react";

export const useCart = () => {
  // Estado inicial del carrito
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [creationDate, setCreationDate] = useState(() => {
    const savedDate = localStorage.getItem("cartCreationDate");
    return savedDate ? new Date(savedDate) : new Date();
  });

  // Persistencia del carrito en localStorage
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    localStorage.setItem("cartCreationDate", creationDate.toISOString());
  }, [cart, creationDate]);

  // Agregar producto al carrito
  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualizamos la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Agregamos un nuevo producto
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  // Calcular el total de productos
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calcular el costo total del carrito
  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
    setCreationDate(new Date());
  };

  return {
    cart,
    addToCart,
    totalItems,
    totalCost,
    creationDate,
    clearCart,
  };
};

export default useCart;
