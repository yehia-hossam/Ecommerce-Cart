import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

const ProductList = ({ searchTermNavbar }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [searchTermProductList, setSearchTermProductList] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(0, 50);
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes((searchTermNavbar || searchTermProductList).toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products"
          value={searchTermProductList}
          onChange={(e) => setSearchTermProductList(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
            </Link>
            <p className="product-price">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
