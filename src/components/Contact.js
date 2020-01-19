import React from "react";
import { Jumbotron, Button, Form } from "react-bootstrap";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contactPage">
      <Jumbotron>
        <h1>Send me an E-Mail</h1>
        <br />
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>First and Last Name</Form.Label>
            <Form.Control type="name" placeholder="Your Name" />
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Label>Your Message:</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
        </Form>
        <p>
          <Button variant="primary">Send</Button>
        </p>
      </Jumbotron>
    </div>
  );
}
