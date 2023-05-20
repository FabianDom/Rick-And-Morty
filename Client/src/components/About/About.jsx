import React from "react";
import img from "../img/about.jpg";
import Styles from "./About.module.css";
export default function About(props) {
  return (
    <div className={Styles.div}>
      <div>
        <img className={Styles.img} src={img} width="300" height="300"></img>
        <button className={Styles.boton}>By: Fabian Dominguez</button>
      </div>
      <nav className={Styles.nav}>
        <h1 className={Styles.h1}>
          ¡Bienvenido proyecto de integración de la API de Rick y Morty en
          React!
        </h1>
      </nav>
    </div>
  );
}
