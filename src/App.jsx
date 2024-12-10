import { Toaster } from "sonner";
import { ProductForm } from "./components/ProductForm";
import React from "react";
import { useCart } from "./hooks/useCart";
import { Cart } from "./components/Cart";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

const App = () => {
  const { cart, addToCart, clearCart, creationDate, deleteItem } = useCart();

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <DarkModeSwitch />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full max-w-md">
            <ProductForm addToCart={addToCart} />
          </div>
          <div className="w-full max-w-3xl">
            <Cart
              cart={cart}
              clearCart={clearCart}
              creationDate={creationDate}
              deleteItem={deleteItem}
            />
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
