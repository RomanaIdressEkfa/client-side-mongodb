import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import './AddItem.css'

const AddItem = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name?.value,
      price: e.target.price?.value,
      shortDescription: e.target.shortDescription?.value,
      image: e.target.image?.value,
      quantity: e.target.quantity?.value,
      serviceProvider: e.target.serviceProvider.value,
      email: user.email,
    }
    e.target.reset()

    const { data } = await axios
      .post("http://localhost:5000/product", product)
    console.log(data);
  };
  const { register } = useForm();

  return (
    <div className="my-5 shadow w-75 mx-auto p-5 bg-dark rounded">
      <h2 className="form text-white">Add Items</h2>
      <div className="form mx-auto">
        <form className="input" onSubmit={handleSubmit}>
          <input className="input"{...register("name", { required: true, maxLength: 20 })} placeholder="Enter the Name" />
          <input className="input p-2 "{...register("shortDescription")} placeholder="Enter description" />
          <input className="input p-2" type="number" {...register("price")} placeholder="Enter Price" />
          <input className="input p-2" type="text" {...register("image")} placeholder="Enter URL" />
          <input className="input p-2" type="text" {...register("quantity")} placeholder="Enter Quantity" />
          <input className="input p-2" type="text" {...register("serviceProvider")} placeholder="Enter Supplier" />
          <input className="input mx-auto" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
