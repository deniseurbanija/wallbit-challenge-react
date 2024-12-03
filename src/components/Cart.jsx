import React from "react";
import useCart from "../hooks/useCart";
import { toast } from "sonner";

export const Cart = ({ cart, clearCart }) => {
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  return (
    <div className="p-6 bg-white shadow rounded w-2/3 flex flex-col text-appleGray-700">
      <h2 className="text-lg font-bold m-2">Cart ({totalProducts})</h2>
      {cart.length > 0 ? (
        <>
          <table className="w-full border rounded border-gray-300 my-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 text-center"
                >
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">${item.price}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-md"
                      width={50}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </>
      ) : (
        <div className="text-center flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"
            />
          </svg>
          <h1>Empty Cart</h1>
        </div>
      )}
    </div>
  );
};
