import { Toaster } from "sonner";
import { Cart } from "./components/Cart";
import { ProductForm } from "./components/ProductForm";
import React from "react";
import { useCart } from "./hooks/useCart";
const App = () => {
  const { cart, addToCart, clearCart } = useCart();

  return (
    <div>
      <h1 className="text-lg font-bold p-5">
        Carrito de Compras para Programadores
      </h1>
      <ProductForm addToCart={addToCart} />
      <Cart cart={cart} />
      <button onClick={clearCart}>Clear cart</button>
      <Toaster />
    </div>
  );
};

export default App;
