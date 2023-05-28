import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

function Favorites() {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  function handleOrder(e) {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }
  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }
  return (
    <div>
      <div>
        <select
          className={Styles.select}
          name="order"
          onChange={handleOrder}
          defaultValue={"Order"}
        >
          <option value="Order">Order</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div>
        <select
          className={Styles.select1}
          name="filter"
          onChange={handleFilter}
          defaultValue={"All"}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <Link to="/home">
        <button className={Styles.botonBack}>
          <RiLogoutBoxLine />
        </button>
      </Link>
      <div className={Styles.div1}>
        {myFavorites.map((cards) => {
          return (
            <Card
              id={cards.id}
              name={cards.name}
              species={cards.species}
              gender={cards.gender}
              image={cards.image}
              origin={cards.origin}
              status={cards.status}
            />
          );
        })}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(mapStateToProps, null)(Favorites);
