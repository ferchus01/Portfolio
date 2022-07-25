import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALGO <span className="purple"> SOBRE MI </span>
            </h1>
            <p className="home-about-body">
              Me gusta crear soluciones e innovar, de alli que soy programador,
              y al menos he aprendido algo, creo… 🤷‍♂️
              <br />
              <br />
              En mi día a día suelo usar clásicos como
              <i>
                &nbsp;
                <b className="purple">
                  HTML5, CSS3, Javascript, Reactjs, Angular, Nodejs, MongoDB{" "}
                </b>
                &nbsp;
              </i>
              y otros, con los que me gusta desarrollar apps web.
              <br />
              <br />
              Me interesa aprender sobre los lenguajes y frameworks relacionados
              a estos temas, así como también reforzar lo que ya he aprendido
              con el tiempo. &nbsp;
              <br />
              <br />
              Siempre que es posible, realizo cursos e investigo sobre las
              tecnologias o actualizaciones nuevas que aparecen.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contactame</h1>
            <p>
              Sientete libre de <span className="purple"> conectar </span>
              conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fernando-ariel-vilca-269791205/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fer_vilca01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
