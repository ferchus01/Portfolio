import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Particle } from "../Particle";
import gifExpertApp from "../../Assets/Projects/gifExpertApp.PNG";
import journalApp from "../../Assets/Projects/journalApp.PNG";

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
              imgPath={journalApp}
              isBlog={false}
              title="Journal-App"
              description="Aplicación de notas donde puedes crearte una cuenta y/o loguearte con la misma o con google. Una vez dentro vas a poder
              crear, editar, eliminar, subir imagenes y ver tus notas. Se uso react, redux, firebase con firestore y autenticación, materialUi, cloudinary, hooks, etc"
              link="https://journal-app-fer-vilca.netlify.app"
              repo="https://github.com/ferchus01/journal-app"
            />
          </Col>
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
};
