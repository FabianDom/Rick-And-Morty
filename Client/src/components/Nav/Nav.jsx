import img from "../img/ricky1morty.png";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SlLogout } from "react-icons/sl";
import { FaHome } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function Nav(props) {
  const [id, setid] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setid(value);
  }
  return (
    <nav className={Styles.nav}>
      <img className={Styles.img} src={img} width="210" height="60" />
      <div>
        <Link className={Styles.navDiv} to="/favorites">
          <button className={Styles.botonFav}>
            <BsFillBagHeartFill size="30" />
          </button>
        </Link>
        <Link to="/About">
          <button className={Styles.spanAbout}>
            <BsFillPersonVcardFill size="30" />
          </button>
        </Link>
        <Link to="/home">
          <button className={Styles.spanHome}>
            <FaHome size="30" />
          </button>
        </Link>
        <input onChange={handleChange} className={Styles.input} type="search" />
        <button className={Styles.botonAdd} onClick={() => props.onSearch(id)}>
          <BsSearch />
        </button>
        <button onClick={() => props.botonRandom()} className={Styles.boton}>
          RANDOM
        </button>

        <button onClick={() => props.logout()} className={Styles.botonLogout}>
          <SlLogout />
        </button>
      </div>
    </nav>
  );
}
