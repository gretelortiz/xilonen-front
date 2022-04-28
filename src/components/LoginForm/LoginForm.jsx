import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/getalent_logo.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleRegistro = (e) => {
    e.preventDefault();
  };
  console.log = ("valorEmail", email);
  return (
    <div id="loginbox">
      <div id="encabezado">
        <img src={logo} alt="getalent_logo" width="100px" height="100px" />
        <h1>GET TALENT</h1>
        <h3>Inicia Sesión</h3>
      </div>
      <form action="" id="loginform" onSubmit={HandleRegistro}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>
          <a href="forgotpassword">¿Olvidaste tu contraseña?</a>
        </p>
        <br />
        <input type="submit" name="login" id="login" value="ingresar" />
      </form>
      <p>
        <Link to="/">¿No tienes una cuenta?</Link>
      </p>
    </div>
  );
}

export default LoginForm;
