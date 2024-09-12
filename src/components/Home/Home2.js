import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/My_photo1.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaEnvelope, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import "../../App.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a Front-end and Full-Stack Developer with over a year of
              experience, I have worked on both team and individual projects
              utilizing a range of technologies and methodologies. My project
              experience includes:{" "}
              <b className="purple">
                {" "}
                JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS, NODE, NESTJS,
                REACT-NATIVE, REDUX, VITE, WEBPACK, REST API, EXPRESS, GIT,
                DOCKER, MONGODB, POSTGRESQL, HTML, CSS, SCSS, TAILWIND, ADAPTIVE
                DESIGN, MATERIAL UI.{" "}
              </b>
              <br />
              <br />
              I'm attentive to details and have good analytical skills what
              allows me to learn new information quickly. Beyond coding, I am
              constantly improving myself by learning new technologies and
              improving my skillset.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://t.me/Nikolay_Maskakay"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:nikolaymaslakay@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Nikolay0803"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mykola-maslakai-28318027a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
