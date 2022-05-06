import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col sm={12} md={6} className="footer-copywright">
          <h3>vilcafernandoariel@gmail.com</h3>
        </Col>
        <Col sm={12} md={6} className="footer-copywright">
          <h3>{year} © Fernando Vilca</h3>
        </Col>
      </Row>
    </Container>
  )
}

