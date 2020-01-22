import React from "react";
import { Button, Image } from "react-bootstrap";
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

class About extends React.Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    return (
      <div
        className="App-header1"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="App-header2">
          <Image
            height="90px"
            width="90px"
            src="profilepic.jpg"
            roundedCircle
          />
          <h1 id="aboutMeHeader">About Me </h1>
        </div>
        <div className="aboutContent">
          <p id="aboutMeBody">
            I received my Masters in Sustainability Management at Columbia
            University in 2017 and worked in Sustainable Finance and Renewable
            Energy. Recently, I decided to learn to code in order to challenge
            myself intellectually and to expand my skillset. I chose to attend
            Fullstack Academy because of its rigorous and highly regarded
            programs. I am currently looking for a fulltime software engineering
            position where I can continue to grow and improve as a developer. I
            hope to incorporate my passion for sustainability into my
            development work. Feel free to check out some of my sample projects
            in my portfolio or reach out to me on LinkeIn or with my contact
            information. I look forward to hearing from you!
          </p>
          <p id="aboutMeBody">
            Here's a few technologies I've been working with recently:
          </p>
          <ul id="techList">
            <li>JavaScript (ES6+)</li>
            <li>ReactJS</li>
            <li>Redux.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Sequelize.js</li>
            <li>PostgreSQL</li>
            <li>React-Native</li>
          </ul>
        </div>
        <Button onClick={this.scrollUp} className="scrollUp">
          <i class="fas fa-chevron-up"></i>
        </Button>
      </div>
    );
  }
}

export default About;
