import React from "react";
import "../styles/App.css";
import { Carousel } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <Carousel className="Carousel">
        <Carousel.Item>
          <img
            height="300px"
            max-width="300px"
            className="d-block w-100"
            src="http://www.xtremelimocincy.com/wp-content/uploads/2018/01/img-placeholder-square-300x300.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="300px"
            max-width="300px"
            className="d-block w-100"
            src="http://www.xtremelimocincy.com/wp-content/uploads/2018/01/img-placeholder-square-300x300.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="300px"
            max-width="300px"
            className="d-block w-100"
            src="http://www.xtremelimocincy.com/wp-content/uploads/2018/01/img-placeholder-square-300x300.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
