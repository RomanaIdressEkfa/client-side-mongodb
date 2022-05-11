import { useEffect, useState } from "react";
const useProducts = (refresh) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://young-beyond-19521.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [refresh]);
  return [products, setProducts];
};

export default useProducts;
