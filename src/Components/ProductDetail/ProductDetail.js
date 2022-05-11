import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../Hooks/Hooks";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  const [refresh, setRefresh] = useState(0);


  const [products] = useProducts(refresh);
  const navigate = useNavigate();

  const handleProducts = () => {
    navigate("/products");
  };

  const productDetail = products?.find((product) => product._id === id);


  const handleDecreesProducts = (id) => {
    const proceed = window.confirm('Are you sure? Do you want to reduce the amount?')
    if (proceed) {

      const name = productDetail.name;
      const price = productDetail.price;
      const shortDescription = productDetail.shortDescription;
      const q = productDetail.quantity;
      const image = productDetail.image;
      const serviceProvider = productDetail.serviceProvider;
      const quantity = Number(q) - 1 > 0 ? Number(q) - 1 : 0;
      const updateProduct = { name, price, shortDescription, quantity, image, serviceProvider }

      fetch(`https://young-beyond-19521.herokuapp.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))

      setRefresh(refresh + 1);
    }

  }
  const handleIncressProducts = (id, e) => {

    e.preventDefault();

    const input = e.target.number.value;
    const name = productDetail.name;
    const price = productDetail.price;
    const shortDescription = productDetail.shortDescription;
    const q = productDetail.quantity;
    const image = productDetail.image;
    const serviceProvider = productDetail.serviceProvider;
    const quantity = Number(q) + Number(input);
    const updateProduct = { name, price, shortDescription, quantity, image, serviceProvider }

    fetch(`https://young-beyond-19521.herokuapp.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))

    setRefresh(refresh + 1);
    e.target.reset();

  }
  return (
    <div>
      <div className="row ms-5 m-0">
        <div className="col-lg-4 col-12">
          <img
            className="detail-card-images"
            src={productDetail?.image}
            alt=""
          />
        </div>
        <div className="detail-card-text col-lg-4 col-12 m-auto">
          <div className="">
            <span className="text-danger "> ৳: </span>
            {productDetail?.price}
            <h3>{productDetail?.name}</h3>
          </div>
          <p className="supplier">Supplier: {productDetail?.serviceProvider}</p>
          <p> {productDetail?.mainDescription}</p>
          <p> Quantity: {productDetail?.quantity}</p>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => handleDecreesProducts(productDetail?._id)}
              className="button-manage me-2"
            >
              Delivered
            </button>
            <form onSubmit={(e) => handleIncressProducts(productDetail?._id, e)}>
              <input type="number" name="number" id="" />
              <br /><br />
              <input className="bg-secondary add" type="submit" value="Add Quantity" />
            </form>
            <button className="manage-button manage-p ms-2" onClick={handleProducts}>
              Manage products
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
