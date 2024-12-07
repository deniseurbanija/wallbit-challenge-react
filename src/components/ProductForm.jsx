import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

export const ProductForm = ({ addToCart }) => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!productId) {
      toast.error("Por favor, ingresa el ID del producto");
      return;
    }
    if (productId > 20) {
      toast.error("El ID debe ser menor o igual a 20");
      return;
    }

    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      const product = response.data;

      addToCart(product, parseInt(quantity, 10));
      toast.success("Se agregó el producto al carrito");
      setProductId("");
      setQuantity(1);
    } catch (error) {
      toast.error("Se produjo un error al agregar al producto");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="p-8 h-96 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-gray-900 font-semibold text-2xl text-center mb-6">
          WALLBIT FRONTEND CHALLENGE
        </h1>
        <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            placeholder="ID del producto"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            min={0}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400 w-full"
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400 w-full"
          />
          <button
            type="submit"
            className="bg-appleGray-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-appleGray-900 transition duration-300"
          >
            Agregar al carrito
          </button>
        </form>
      </div>
    </div>
  );
};
