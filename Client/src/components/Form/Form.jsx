import React from "react";
import { useState } from "react";
import validation from "./validation";
import Styles from "./Form.module.css";
import img from "../img/form.jpg";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "fabian@mail.com",
    password: "fabian1234",
  });
  const [errors, Seterrors] = useState({});

  function handleInputChange(event) {
    Seterrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }
  return (
    <body className={Styles.body}>
      <div className={Styles.div}>
        <form className={Styles.form}>
          <img src={img} width="270px" height="200px" />
          <div>
            <lable className={Styles.label}>Username</lable>
            <input
              className={Styles.inputs}
              type="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              placeholder="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <br />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <lable className={Styles.label}>Password</lable>
            <input
              className={Styles.inputs}
              type="password"
              placeholder="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <br />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button
            className={Styles.botonlogin}
            onClick={handleSubmit}
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </body>
  );
}
