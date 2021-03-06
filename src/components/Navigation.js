import React from "react";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import "../styles/Nav.css";

export default class NormalNav extends React.Component {
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
      top: 1000,
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
        <Navbar
          className="navBar"
          collapseOnSelect
          variant="dark"
          expand="lg"
          fixed="top"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/" className="NavBrand">
              Joshua Grossman
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="Portfolio">Portfolio</Nav.Link>
              <Nav.Link onClick={this.handleShow}>Resume</Nav.Link>
              <Nav.Link href="Contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Modal
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
                width="475px"
                height="600px"
                title="My Resume"
              ></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <a href="Joshua Grossman's Resume.pdf" download>
              <Button variant="success">
                <i class="fas fa-file-download"></i> Download
              </Button>
            </a>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
