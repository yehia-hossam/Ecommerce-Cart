import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const removeItemFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };
};
