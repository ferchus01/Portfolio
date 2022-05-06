import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

export const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          size="sm"
          className="me-2"
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp;
          Ver proyecto
        </Button>
        <Button
          size="sm"
          className="me-2"
          variant="primary"
          href={props.repo}
          target="_blank"
        >
          <SiGithub /> &nbsp;
          Ver repositorio
        </Button>
      </Card.Body>
    </Card>
  );
}
