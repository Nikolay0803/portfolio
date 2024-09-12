import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaEnvelope, FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Maslakai Mykola</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© m.m {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://t.me/Nikolay_Maskakay"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:nikolaymaslakay@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaEnvelope />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Nikolay0803"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mykola-maslakai-28318027a/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
