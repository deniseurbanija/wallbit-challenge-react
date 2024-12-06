import { Toaster } from "sonner";
import { Cart } from "./components/Cart";
import { ProductForm } from "./components/ProductForm";
import React from "react";
import { useCart } from "./hooks/useCart";
const App = () => {
  const { cart, addToCart, clearCart, creationDate, deleteItem } = useCart();

  return (
    <div className=" h-screen flex flex-row justify-center items-center w-full p-12 gap-4">
      <ProductForm addToCart={addToCart} />
      <Cart
        cart={cart}
        clearCart={clearCart}
        creationDate={creationDate}
        deleteItem={deleteItem}
      />
      <Toaster />
    </div>
  );
};

export default App;
