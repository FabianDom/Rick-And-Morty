import Styles from "./Card.module.css";
import { Link } from "react-router-dom";
import addPersonaje from "../../redux/actions";
import { deletePersonaje } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deletePersonaje(props.id);
    } else {
      setIsFav(true);
      props.addPersonaje(props);
    }
  }
  return (
    <div className={Styles.tarjet}>
      <div className={Styles.divboton}>
        {isFav ? (
          <span className={Styles.botonFav} onClick={handleFavorite}>
            ❤️
          </span>
        ) : (
          <span className={Styles.botonFav} onClick={handleFavorite}>
            🤍
          </span>
        )}
        {location.pathname === "/home" ? (
          <span className={Styles.boton} onClick={props.onClose}>
            X
          </span>
        ) : null}
      </div>
      <div className={Styles.linkDiv}>
        <Link to={`/detail/${props.id}`}>
          <img className={Styles.imagen} src={props.image} alt="" />

          <h2 className={Styles.h2name}>{props.name}</h2>

          <div className={Styles.divh2}>
            <h2 className={Styles.h2}>{props.species}</h2>
            <h2 className={Styles.h2}>{props.gender}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPersonaje: (characters) => {
      dispatch(addPersonaje(characters));
    },
    deletePersonaje: (id) => {
      dispatch(deletePersonaje(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
