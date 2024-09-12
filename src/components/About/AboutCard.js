import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I’m <span className="purple">Mykola Maslakai</span>{" "}
            from <span className="purple">Kherson, Ukraine</span>.
            <br />
            I’m passionate about developing innovative websites and
            applications, and I thrive on solving complex problems through code.
            <br />
            When I'm not coding, I enjoy exploring new technologies,
            experimenting with creative design, and staying active in my
            community. I’m also an avid learner who loves diving into new
            challenges and collaborating with others to bring ideas to life!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and Outdoor Activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
