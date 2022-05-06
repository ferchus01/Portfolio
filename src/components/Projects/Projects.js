import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Particle } from "../Particle";
import gifExpertApp from "../../Assets/Projects/gifExpertApp.PNG";

export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui algunos proyectos que realice en este tiempo
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gifExpertApp}
              isBlog={false}
              title="Gif-Expert-App"
              description="Buscador de gifs online, hecho con conceptos básicos de reactjs, hooks, bootstrap, llamada de api, etc"
              link="https://ferchus01.github.io/gif-expert-app/"
              repo="https://github.com/ferchus01/gif-expert-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
