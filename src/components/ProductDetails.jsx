import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(slug);
      setProduct(data);
    };
    fetchProduct();
  }, [slug]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-details">
      <img src={product.images[0]} alt={product.title} />

      <div className="product-details-content">
        <div>
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
