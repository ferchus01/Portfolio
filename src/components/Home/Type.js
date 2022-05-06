import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador web",
          "MERN y MEAN stack",
          "Analista Programador Universitario",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}