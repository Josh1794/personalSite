import React from "react";
import "../styles/Portfolio.css";
import { Carousel } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div className="portfolioOne">
      <Carousel>
        <Carousel.Item>
          <a href="https://github.com/thunky-monks/graceshopper">
            <img className="d-block w-100" src="cart.png" alt="First slide" />
          </a>
          <Carousel.Caption>
            <h3>E-Commerce-Commerce</h3>
            <p>A Sample e-commerce website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/Josh1794/myWeatherApp">
            <img
              className="d-block w-100"
              src="Weather-icon.png"
              alt="Second slide"
            />
          </a>

          <Carousel.Caption>
            <h3>My Weather App</h3>
            <p>
              A well designed React Native Weather app using OpenWeather API
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/Thunkaroos/YellowBrickRoad">
            <img
              className="d-block w-100"
              src="yellowBrickRoad.jpg"
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
            <h3>Yellow Brick Road</h3>
            <p>An AR Tour Guide app</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
