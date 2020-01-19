import React from "react";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import "../styles/Nav.css";

export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.scrollWin = this.scrollWin.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  state = {
    show: false
  };
  scrollWin(e) {
    e.preventDefault();
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" className="navBar">
          <Container className="navContainer">
            <Nav className="navLinks">
              <Nav.Link href="Portfolio">Portfolio</Nav.Link>
              <Nav.Link onClick={this.handleShow}>Resume</Nav.Link>
              <Nav.Link onClick={this.scrollWin}>About me</Nav.Link>
              <Nav.Link href="Contact">Contact Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Modal
          id="mobileModal"
          autoFocus={true}
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Joshua Grossman's Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <iframe
                src="https://drive.google.com/file/d/1YtYsYM6FEHskBKUzoZZK8_qgTt1q-NzJ/preview"
                width="100%"
                height="100%"
                title="My Resume"
              ></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="success"
              href="https://drive.google.com/file/d/1YtYsYM6FEHskBKUzoZZK8_qgTt1q-NzJ/view"
            >
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
