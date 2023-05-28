import React from "react";
import img from "../img/about.jpg";
import Styles from "./About.module.css";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
export default function About(props) {
  return (
    <div className={Styles.card}>
      <div className={Styles.div}>
        <div>
          <img className={Styles.img} src={img} width="300" height="300"></img>
          <Link to="https://github.com/FabianDom" target="_blank">
            <button className={Styles.boton}>
              <AiOutlineGithub size="30" />
            </button>
          </Link>
          <Link
            to="https://www.linkedin.com/in/fabian-dominguez-34840b212/"
            target="_blank"
          >
            <button className={Styles.boton}>
              <BsLinkedin size="26" />
            </button>
          </Link>
        </div>
        <nav className={Styles.nav}>
          <h1 className={Styles.h1}>
            ¡Bienvenido! proyecto de integración de la API de Rick y Morty.
          </h1>
        </nav>
        <p className={Styles.p}>
          {" "}
          ¡Hola! Mi nombre es Fabian Dominguez <br /> soy Ingeniero industrial,
          ademas estoy <br /> preparandome para ser Full Stack Developer. <br />
          Les presento mi App de Rick and Morty <br /> donde aplique todos los
          conocimientos <br /> adquiridos en el Bootcamp. En esta app
          <br /> se utilizaron las herramientas de HTML, <br /> CSS, React,
          Redux, Express, Node, JS, Sequelize.
        </p>
      </div>
    </div>
  );
}
