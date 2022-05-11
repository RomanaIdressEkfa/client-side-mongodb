import React from "react";
import "./ServiceSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../../Images/gallery1.jpg';
import logo2 from '../../Images/gallery2.jpg';
import logo3 from '../../Images/gallery3.jpg';
import logo4 from '../../Images/gallery4.jpg';
import logo5 from '../../Images/gallery5.jpg';
import logo6 from '../../Images/gallery6.jpg';
import Address from "../Address/Address";
AOS.init();

const ServiceSlider = () => {
  return (

    <div className="mx-auto" >
      <Address></Address>
      <h2 className="bg-white text-center font-weight-bold my-2 ">Our Fashionable Dress Collection</h2>
      <div className="bg-white text-center">
        <div className="d-flex picture">
          <img className="img-fluid  picture" src={logo} alt="" />
          <img className="img-fluid w-50 picture" src={logo2} alt="" />
          <img className="img-fluid mb-2 picture" src={logo4} alt="" />
          <br />
        </div>
        <div className="d-flex picture">
          <img className="img-fluid  picture" src={logo3} alt="" />
          <img className="img-fluid picture" src={logo5} alt="" />
          <img className="img-fluid picture" src={logo6} alt="" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
