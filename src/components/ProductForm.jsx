import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

export const ProductForm = ({ addToCart }) => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);

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

      addToCart(product, parseInt(quantity, 10)); // Llamamos al hook para actualizar el carrito
      setProductId("");
      setQuantity(1);
      toast.success("Product added succesfully");
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      toast.error("Hubo un problema al obtener el producto.");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="w-full text-center">
      <input
        type="number"
        placeholder="ID del producto"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        min={0}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min={1}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button type="submit">Agregar al carrito</button>
    </form>
  );
};
