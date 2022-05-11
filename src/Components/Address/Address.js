import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div>
      <div className="bg-white">
        <h1 className="title-product mx-auto text-black">Our Address</h1>
        <div className="row address-container m-0">
          <div className="col-lg-3 col-12 address ">
            <h2 > Import & Export Agency</h2>
            <p>
              Sales Head Office, P.O. Box 13754, Dubai, United Arab Emirates{" "}
              <br />
              Call Us: 345029400 <br /> Whatsapp: 01307957682
            </p>
          </div>
          <div className="col-lg-3 col-12 address">
            <h2 >Wonderful Fashion House</h2>
            <p>
              Meaning of fashion house in English. fashion house. a company that designs and sells new styles of clothes, shoes, bags, etc., especially expensive ones.
            </p>
          </div>
          <div className="col-lg-3 col-12 address">
            <h2 >Women's fashion</h2>
            <p>
              Discover women's fashion on Pinterest. See top ideas and trending searches about formal outfits, casual looks, capsule wardrobes and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
