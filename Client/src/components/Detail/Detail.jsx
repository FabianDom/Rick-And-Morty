import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./Detail.module.css";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Detail(props) {
  const { id } = useParams();
  const [character, Setcharacter] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          Setcharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return Setcharacter({});
  }, [id]);

  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.div}>
        <Link to="/home">
          <button className={Styles.botonBack}>
            <RiLogoutBoxLine />
          </button>
        </Link>
        <div className={Styles.h1}>
          <h1>Name:{character.name}</h1>
          <h1>Status:{character.status}</h1>
          <h1>Specie:{character.specie}</h1>
          <h1>Gender:{character.gender}</h1>
          <h1>Origin:{character.origin?.name}</h1>
        </div>
        <img className={Styles.imagen} src={character.image} alt="" />
      </div>
    </div>
  );
}
