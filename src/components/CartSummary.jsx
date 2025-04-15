import React from "react";
import { useCart } from "../hooks/useCart";

const CartSummary = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;

