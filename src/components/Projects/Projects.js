import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Peach from "../../Assets/Projects/Peach.png";
import beautyzone from "../../Assets/Projects/Beaty-shots_so.png";
import learn_lingo from "../../Assets/Projects/home-lin.png";
import todoapp from "../../Assets/Projects/todoapp.png";
import netflixtube from "../../Assets/Projects/netflixtube.png";
import Sviy from "../../Assets/Projects/Sviy.png";
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
              imgPath={Peach}
              isBlog={false}
              title="Marketplace Peach"
              description="Peach is an online platform designed to facilitate the buying and selling of goods among users. It provides a secure environment for sellers and buyers, allowing them to easily interact and conduct transactions.
              Platform Objective:
              The goal of Peach is to create a convenient and reliable platform where users can exchange goods, explore new offers, and make purchases with maximum confidence. Peach aims to make the buying and selling process as convenient and reliable as possible, supporting active and safe communication between users."
              ghLink="https://github.com/kamilka13me/marketplace_teamchallenge"
              demoLink="https://marketplace-teamchallenge.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sviy}
              isBlog={false}
              title="Marketplace-Sviy"
              description="
              Marketplace-Sviy is an online platform designed to support Ukrainian manufacturers who want to introduce and sell their products through the Internet. In this market, manufacturers can post information about their products, including photographs, descriptions and prices. In addition, the platform provides safe and convenient payment and delivery methods so that buyers can make purchases with confidence and comfort. The goal of Marketplace-Sviy is to support and develop domestic production, contributing to its growth and successful development in the Ukrainian online trading market"
              ghLink="https://github.com/tarik2454/web-app-Marketplace-Sviy"
              demoLink="https://web-app-marketplace-sviy.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learn_lingo}
              isBlog={false}
              title="Learn Lingo"
              description="Learn Lingo is an interactive language learning app with features like user registration, authentication, and content access, built using a Nest.js backend and Next.js frontend for a seamless user experience. The technology stack includes Nest.js for a modular backend, JWT for secure authentication, Prisma ORM for database management, and Swagger for API documentation. On the frontend, Next.js ensures optimal performance with SSR and SSG, Next-auth manages user sessions, React builds the UI, and Tailwind CSS provides responsive designs. Key features include secure user registration, authentication, a public home page, a restricted teachers page, and auto-generated API documentation with Swagger."
              ghLink="https://github.com/Nikolay0803/auth-next"
              demoLink="https://auth-next-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixtube}
              isBlog={false}
              title="Netflixtube"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
