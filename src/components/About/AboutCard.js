import React from "react";
import Card from "react-bootstrap/Card";

export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1rem" }}>
            Hola a todos me llamo<span className="purple"> Fernando Ariel Vilca </span>,
            soy desarrollador web, y soy de Argentina.
            <br />
            Termine la carrera de Analísta Programador Universitario donde aprendí desde cero las bases de la
            programación. Pase de ver los fundamentos y practicas de la programación estructurada, estructura
            de datos, programación orientada a objetos hasta el análisis y diseño de sistemas, programación 
            y servicios web, bases de datos; y asi muchas materias que hoy en dia me hicieron estar mas apto 
            para lo que es este mundo. 
            <br />
            Por otra parte soy bastante autodidacta y aprendo por mi propia cuenta las tecnologías que se usan
            en este ámbito. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
