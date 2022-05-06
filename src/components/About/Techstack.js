import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiFirebase,
} from "react-icons/si";

export const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Html5">
        <DiHtml5 />
        <p>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>Reactjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>Firebase</p>
      </Col>
    </Row>
  );
}
