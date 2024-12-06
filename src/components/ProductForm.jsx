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
    <div className="h-5/6 p-6 w-1/3 flex flex-col items-center justify-center">
      <h1 className="text-newRed font-semibold text-6xl">
        WALLBIT FRONTEND CHALLENGE
      </h1>
      <form onSubmit={handleOnSubmit} className=" text-appleGray-700 text-xl">
        <input
          type="number"
          placeholder="ID del producto"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          min={0}
          className="border border-gray-300 rounded-md px-8 py-6 focus:outline-none focus:ring-2 focus:ring-blue-300 w-1/2"
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
          className="border border-gray-300 rounded-md mt-4 px-8 py-6 focus:outline-none focus:ring-2 focus:ring-blue-300 w-1/2"
        />
        <button type="submit" className="mt-4 font-semibold">
          Agregar al carrito
        </button>
      </form>
    </div>
  );
};
