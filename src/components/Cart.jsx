import React from "react";

export const Cart = ({ cart }) => {
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-2/3 text-center  items-center justify-center">
      <h2>Carrito</h2>
      <table className="border-2 border-black">
        <thead>
          <tr>
            <th className="w-1/4">Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <img src={item.image} alt={item.title} width={50} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total de productos: {totalProducts}</p>
        <p>Costo total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
