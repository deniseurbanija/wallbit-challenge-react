import React from "react";

export const CartItem = ({ item, handleDeleteItem }) => {
  return (
    <tr>
      <td className="px-4 py-2 whitespace-nowrap">
        <div
          className="text-sm text-text-primary max-w-52 truncate"
          title={item.title}
        >
          {item.title}
        </div>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm text-text-primary">
        ${item.price.toFixed(2)}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-smtext-text-primary">
        {item.quantity}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-smtext-text-primary">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-cover rounded-md"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleDeleteItem(item.id)}
          className="text-red-600 hover:text-red-900 focus:outline-none focus:underline"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
