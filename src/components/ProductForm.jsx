import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

export const ProductForm = ({ addToCart }) => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!productId) {
      toast.error("Enter product ID");
      return;
    }
    if (productId > 20) {
      toast.error("The ID must be less than or equal to 20.");
      return;
    }

    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      const product = response.data;

      addToCart(product, parseInt(quantity, 10));
      setProductId("");
      setQuantity(1);
      toast.success("Product added succesfully");
    } catch (error) {
      toast.error("There was a problem retrieving the product.");
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-1/3 text-center flex flex-col bg-white p-6 items-center justify-center text-appleGray-700"
    >
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        min={0}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-1/2"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min={1}
        className="border border-gray-300 rounded-md px-4 mt-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-1/2"
      />
      <button type="submit" className="mt-4 font-semibold">
        Add
      </button>
    </form>
  );
};
