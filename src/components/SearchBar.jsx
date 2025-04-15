import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";

const SearchBar = ({ setProducts }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        getProducts(0, 10).then((data) => {
          const filteredProducts = data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filteredProducts);
        });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, setProducts]);

  return (
    <input
      type="text"
      placeholder="Search products"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
