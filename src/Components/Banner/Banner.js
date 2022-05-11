import React from "react";
import "./Banner.css";
import logo1 from "../../Images/banner1.1.jpg";
import logo2 from "../../Images/banner2.1.jpg";
import logo3 from "../../Images/banner3.1.jpg";
import { Carousel } from "react-bootstrap";
import Address from "../Address/Address";

const Banner = () => {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-container"
            src={logo1}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo2}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo3}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Banner;
