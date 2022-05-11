import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import './ManageProducts.css'
import useProducts from "../Hooks/Hooks";

const ManageProducts = () => {

  const [refresh, setRefresh] = useState(0);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure ! you want to, delete this item?");
    if (proceed) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    setRefresh(refresh + 1);
  }
  const [products] = useProducts(refresh);
  const [user] = useAuthState(auth);


  return (
    <div>
      <div className="">
        <div className="container">
          <table className="table t-head mt-5">
            <thead >
              <tr className="t-head" >

                <th className="t-head">Image</th>
                <th className="">Name</th>
                <th className="t-head">Price</th>
                <th className="t-head">Quantity</th>
                <th className="t-head">Delete</th>
              </tr>
            </thead>
            <tbody>

              {products.map((product) => {
                console.log(product.name);
                return (
                  <tr>

                    <img className="table-img" src={product.image} alt="" />
                    <td className="t-head"> {product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <button className="delete btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
