import React from "react";
import "../styles/Portfolio.css";
import { Carousel } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div>
      <Carousel className="portfolioOne">
        <Carousel.Item>
          <a href="https://github.com/thunky-monks/graceshopper">
            <img className="d-block w-100" src="cart.png" alt="First slide" />
          </a>
          <Carousel.Caption>
            <h5>E-Commerce-Commerce</h5>
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
            <h5>My Weather App</h5>
            <p>A React Native Weather app using OpenWeather API</p>
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
            <h5>Yellow Brick Road</h5>
            <p>An AR Tour Guide app</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
