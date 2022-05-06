import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Particle } from "../Particle";
import { Techstack } from "./Techstack";
import { AboutCard }  from "./AboutCard";
import { Toolstack }  from "./Toolstack";
import { Github } from "./Github";
import laptopImg from "../../Assets/about.png";

export const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Quien <strong className="purple">SOY</strong> ?
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skills</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
