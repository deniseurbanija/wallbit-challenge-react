import { Toaster } from "sonner";
import { Cart } from "./components/Cart";
import { ProductForm } from "./components/ProductForm";
import React from "react";
import { useCart } from "./hooks/useCart"; // Tu hook personalizado para el carrito

const App = () => {
  const { cart, addToCart, clearCart } = useCart(); // Usamos el hook personalizado

  return (
    <div>
      <h1>Carrito de Compras para Programadores</h1>
      {/* Formulario para agregar productos */}
      <ProductForm addToCart={addToCart} />
      {/* Tabla de productos */}
      <Cart cart={cart} />
      <button onClick={clearCart}>Clear cart</button>
      <Toaster />
    </div>
  );
};

export default App;
