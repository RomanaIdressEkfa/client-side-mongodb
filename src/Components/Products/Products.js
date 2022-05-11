import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";
import image from '../../Images/product1.jpg'
import "./Products.css";
import Loading from "../Loading/Loading";

const Products = () => {
  const [products] = useProducts();


  return (
    <div className="product ">
      <img className="w-100 product-banner" src={image} alt="" />
      <br />
      <h2 className="text-center">Update Product</h2>
      <div className="products-card container">


        {products.length ? products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        )) : <Loading></Loading>}

      </div>
    </div>
  );
};

export default Products;
