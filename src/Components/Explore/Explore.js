import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";

const Explore = () => {
  const [products] = useProducts();
  console.log(products);
  
  return (
      <div>
          
          <div className="products-card container">
            {products.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      );


  
};

export default Explore;
