import "./App.css";
import axios from "axios";
//import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
//import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { useState } from "react";
import Styles from "./components/Cards/Cards.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./components/Error 404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [characters, Setcharacters] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  async function onSearch(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = await response.json();
      if (data.name) {
        const exists = characters.find((character) => character.id === data.id);
        if (exists) {
          window.alert("El personaje ya fue agregado.");
        } else {
          Setcharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      window.alert("Ocurrio un error al buscar el personaje");
    }
  }

  function onClose(id) {
    const filtercharacters = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    Setcharacters(filtercharacters);
  }
  function botonRandom() {
    const randomid = Math.floor(Math.random() * 826) + 1;
    onSearch(randomid);
  }

  return (
    <body style={{ backgroundSize: "100% 100%" }}>
      <div className={Styles.imgCards}>
        <div className="App" style={{ padding: "25px" }}>
          {pathname !== "/" && (
            <Nav
              onSearch={onSearch}
              botonRandom={botonRandom}
              logout={logout}
            />
          )}

          <Routes>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/" element={<Form login={login} />}></Route>
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
