import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, CardImg, Card} from "react-bootstrap";
import { Particle } from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
// import { Card, CardMedia } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/CV-Fernando Vilca.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const [width, setWidth] = useState(1200);

  const resumeLink ="https://drive.google.com/file/d/1yrCmSxMBoukSHqCfEmsYskRmkm-x3OFt/view?usp=sharing";


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}
