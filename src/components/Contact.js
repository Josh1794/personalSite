import React from "react";
import { Jumbotron, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contactPage">
      <Jumbotron>
        <h1>Contact Information</h1>
        <br />
        <h4>Name: Joshua Grossman</h4>
        <h4>
          Email:{" "}
          <a href="mailto:josh1794@gmail.com?subject=Personal Site Mail">
            Josh1794@gmail.com
          </a>
        </h4>
        <br />
        <div id="social">
          <h2>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 200, hide: 400 }}
              overlay={gitHubTooltip}
            >
              <a alt="github" href="https://github.com/Josh1794">
                <i class="fab fa-github"></i>
              </a>
            </OverlayTrigger>
          </h2>

          <h2>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 200, hide: 400 }}
              overlay={linkedinTooltop}
            >
              <a href="https://www.linkedin.com/in/joshua-grossman17/">
                <i class="fab fa-linkedin"></i>
              </a>
            </OverlayTrigger>
          </h2>
        </div>
      </Jumbotron>
    </div>
  );
}

function gitHubTooltip(props) {
  return <Tooltip {...props}>Github Profile</Tooltip>;
}

function linkedinTooltop(props) {
  return <Tooltip {...props}>LinkedIn Profile</Tooltip>;
}
