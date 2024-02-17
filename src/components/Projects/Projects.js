import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import modern_bakery from "../../Assets/Projects/modern_bakery.png";
import beautyzone from "../../Assets/Projects/beautyzone.jpg";
import todoapp from "../../Assets/Projects/todoapp.jpg";
import netflixtube from "../../Assets/Projects/netflixtube.png";
import WDB from "../../Assets/Projects/WDB.png";
import deadruss from "../../Assets/Projects/deadruss.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixtube}
              isBlog={false}
              title="Tetflixtube"
              description="“Netflixtube” is a web application created based on the design of the Netflix service. This application allows for the viewing of a large number of movies. Here are some features: the application implements a verification system that allows users to create their own accounts for storing personal settings and movie lists, verification using Google and Github: Users can use their Google or Github accounts to log into the application, providing an additional level of convenience and security, adding movies to favorites: Users can add movies to their favorites, allowing them to easily return to them later.
              TS, React, Next.js, Mongodb"
              ghLink="https://github.com/Nikolay0803/netflixtube"
              demoLink="https://netflixtube.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deadruss}
              isBlog={false}
              title="DeadRuss"
              description="“Deadruss” is a mobile application developed using React Native for the Android platform. This application provides reliable and detailed information about the losses of the invaders in the war. Here are some features: information search: The application allows users to find detailed information about the enemy’s losses in the war, all information provided in the application is reliable and verified, this application was developed using React Native, making it accessible to Android users.
              React-native, JS, Redux, Firebase"
              ghLink="https://github.com/Nikolay0803/CRNP"
              demoLink="https://drive.google.com/file/d/1tkt1JvIJHU80Vl_i8BOvHNkqy54V8NFW/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="Todoapp"
              description="“TodoApp” is an application created using React. This application is an ideal tool for organizing your time and tasks. With it, you can: add goals: You can set specific goals that you want to achieve, add descriptions to them: Each goal can have a detailed description, helping you better understand what exactly you want to achieve, edit them: You can make changes to your goals and descriptions at any time, mark completion: When you achieve your goals, you can mark them as completed."
              ghLink="https://github.com/Nikolay0803/my-app2"
              demoLink="https://my-todo-three-rho.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modern_bakery}
              isBlog={false}
              title="Modern bakery"
              description="Discover the world of delicious bakery with our new website ‘Modern Bakery’! Our site is created using the latest technologies HTML, SCSS, and JS, providing you with the best user experience. Discover our traditions, advantages, and unique offers right now!"
              ghLink="https://github.com/Nikolay0803/genius__test"
              demoLink="https://nikolay0803.github.io/genius__test/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautyzone}
              isBlog={false}
              title="Beauty zone"
              description="Discover the world of beauty with our new website ‘Beauty Zone’! Our site is created using the latest technologies HTML, SCSS, and JS, providing you with the best user experience. Discover our services, advantages, and unique offers right now"
              ghLink="https://github.com/Nikolay0803/Beauty-zone"
              demoLink="https://nikolay0803.github.io/Beauty-zone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WDB}
              isBlog={false}
              title="WDB"
              description="The “WDB” website appears to be an excellent resource that uses animation to create a dynamic and attractive user experience."
              ghLink="https://github.com/Nikolay0803/WDB"
              demoLink="https://nikolay0803.github.io/WDB/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
