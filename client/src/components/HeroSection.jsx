import React from "react";
import { Button } from "react-bootstrap";
import "./hero.css";
import headphone from "./images/headphone.png";

const HeroSection = () => {
  return (
    <>
      <div className="container hero-section shadow rounded my-5">
        <div className="hero d-flex align-items-center p-5 justify-content-between">
          <div className="text-section d-block">
            <p className="w-100 d-block">Grab Up To 50% Off On Selected Headphones</p>
            <Button className="bg-success-dark">Buy Now</Button>
          </div>
          <div className="img-section">
            <img
              src={headphone}
              alt="Product Headphone"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
