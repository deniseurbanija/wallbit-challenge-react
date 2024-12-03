import { Toaster } from "sonner";
import { Cart } from "./components/Cart";
import { ProductForm } from "./components/ProductForm";
import React from "react";
import { useCart } from "./hooks/useCart";
const App = () => {
  const { cart, addToCart, clearCart } = useCart();

  return (
    <div className="flex flex-row justify-center items-center w-full bg-red-600 p-12 gap-4">
      <ProductForm addToCart={addToCart} />
      <Cart cart={cart} clearCart={clearCart} />
      {/* <button onClick={clearCart}>Clear cart</button> */}
      <Toaster />
    </div>
  );
};

export default App;
