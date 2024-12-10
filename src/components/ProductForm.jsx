import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const ProductForm = ({ addToCart }) => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("1");

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!productId) {
      toast.error("Por favor, ingresa el ID del producto");
      return;
    }
    if (parseInt(productId, 10) > 20) {
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
      setQuantity("1");
    } catch (error) {
      toast.error("Se produjo un error al agregar al producto");
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-sm border border-accent p-6 w-full">
      <h1 className="text-2xl font-bold text-text-primary text-center mb-6">
        WALLBIT FRONTEND CHALLENGE
      </h1>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="productId"
            className="block text-sm font-medium text-text-secondary mb-1"
          >
            ID del producto
          </label>
          <input
            id="productId"
            type="number"
            placeholder="Ingrese el ID del producto"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            min={1}
            max={20}
            className="w-full px-3 py-2  border border-accent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-text-secondary mb-1"
          >
            Cantidad
          </label>
          <input
            id="quantity"
            type="number"
            placeholder="Ingrese la cantidad"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min={1}
            className="w-full px-3 py-2  border border-accent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent  font-medium py-2 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
        >
          Agregar al carrito
        </button>
      </form>
    </div>
  );
};
