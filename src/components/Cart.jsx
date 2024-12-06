import React from "react";
import { toast } from "sonner";

export const Cart = ({ cart, clearCart, creationDate, deleteItem }) => {
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    clearCart();
    toast.success("Carrito vaciado");
  };

  const handleDeleteItem = (productId) => {
    deleteItem(productId);
    toast.success("Producto eliminado del carrito");
  };

  return (
    <div className="font-sans p-6 h-5/6 bg-white shadow rounded w-2/3 flex flex-col text-appleGray-700 ">
      {cart.length > 0 ? (
        <div className="text-xl">
          <h2 className="font-bold m-2 text-2xl">
            Carrito de compras ({totalProducts}) - iniciado el{" "}
            {creationDate.toLocaleDateString()}
          </h2>
          <div className="overflow-y-auto max-h-72">
            <table className="w-full border-collapse border border-gray-300 rounded-md my-4 shadow-sm">
              <thead>
                <tr>
                  <th className="w-48">Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Imagen</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 text-center"
                  >
                    <td className="py-4 px-6">{item.title}</td>
                    <td className="py-4 px-6">${item.price}</td>
                    <td className="py-4 px-6">{item.quantity}</td>
                    <td className="py-4 px-6">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-6 flex justify-center items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-md"
                        width={50}
                      />
                    </td>
                    <button
                      onClick={() => {
                        handleDeleteItem(item.id);
                      }}
                    >
                      x
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="flex flex-row justify-between items-end mt-4
          "
          >
            <button
              onClick={handleClearCart}
              className="bg-newRed text-white font-semibold py-2 px-4 rounded hover:text-slate-100 transition-colors"
            >
              Vaciar carrito
            </button>
            <p className="text-lg font-bold flex items-center">
              <span className="mr-2">Total:</span>
              <span className="text-newLightGreen">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold m-2">
            Carrito de compras ({totalProducts})
          </h2>
          <div className="text-center flex flex-col justify-center items-center mt-8 text-appleGray-700">
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
            <h1 className="text-xl font-semibold">Tu carrito está vacío</h1>
            <p className="mt-2">Agrega productos para comenzar tu compra</p>
          </div>
        </>
      )}
    </div>
  );
};
