import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items); 
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart"); 
  };

  return (
    <div className="cart-container" onClick={handleCartClick}>
      <FaShoppingCart size={28} />
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
    </div>
  );
};

export default CartIcon;
