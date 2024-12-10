import React, { useState } from "react";
import { toast } from "sonner";
import { CartItem } from "./CartItem";
import { Modal } from "./Modal";

export const Cart = ({ cart, clearCart, creationDate, deleteItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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
    setItemToDelete(productId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      deleteItem(itemToDelete);
      setIsModalOpen(false);
      setItemToDelete(null);
      toast.success("Producto eliminado del carrito");
    }
  };

  return (
    <div className="font-sans p-6 bg-background border border-accent rounded-lg shadow-sm w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">
        Carrito de compras ({totalProducts})
        {cart.length > 0 && (
          <span className="text-sm font-normal ml-2 text-text-secondary">
            iniciado el {creationDate.toLocaleDateString()}
          </span>
        )}
      </h2>
      {cart.length > 0 ? (
        <>
          <div className="border border-accent rounded-md overflow-hidden">
            <div className="max-h-[300px] overflow-y-auto">
              <table className="w-full">
                <thead className="bg-accent bg-opacity-10">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider w-1/3">
                      Producto
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider w-1/6 hidden sm:table-cell">
                      Precio
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider w-1/6">
                      Cantidad
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider w-1/6 hidden sm:table-cell">
                      Total
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider w-1/6 hidden md:table-cell">
                      Imagen
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-accent">
                  {cart.map((item, index) => (
                    <CartItem
                      key={index}
                      item={item}
                      handleDeleteItem={handleDeleteItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Vaciar carrito
            </button>
            <p className="text-lg font-bold text-text-primary">
              Total:{" "}
              <span className="text-accent">${totalPrice.toFixed(2)}</span>
            </p>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 004 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-text-primary">
            Tu carrito está vacío
          </h3>
          <p className="mt-1 text-sm text-text-secondary">
            Agrega productos para comenzar tu compra
          </p>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirmar eliminación"
        message="¿Estás seguro de que quieres eliminar este producto del carrito?"
      />
    </div>
  );
};
