import { useEffect, useState } from "react";
const useProducts = (refresh) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [refresh]);
  return [products, setProducts];
};

export default useProducts;
