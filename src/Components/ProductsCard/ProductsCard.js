import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ product }) => {
  console.log(product);
  const { _id, name, price, serviceProvider, image, shortDescription } = product;
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      
    >
      
      <Card style={{ width: "18rem" }} id="card">
        <Card.Body>
          <img className="card-images" src={image} alt={image} />
          <div className="card-text">
            <div className="">
              <span className="text-danger "> ৳: </span>
              {price}
              <h3>{name}</h3>
            </div>
            <p className="supplier">Supplier: {serviceProvider}</p>
            <p> {shortDescription}</p>
          </div>
          <button
            onClick={() => handleProductClick(_id)}
            className="button-product-card"
          >
            Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsCard;
