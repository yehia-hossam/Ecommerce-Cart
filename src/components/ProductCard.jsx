import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(storedCart));

    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
