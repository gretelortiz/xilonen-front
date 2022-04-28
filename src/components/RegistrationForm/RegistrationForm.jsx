import React from "react";
import { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationFrom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState(false);
  const navigate = useNavigate();
  const HandleRegistro = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-school-back2.herokuapp.com/api/auth/login", {
        email,
        password,
        role_AE: perfil,
      })
      .then((res) => navigate("/home"))
      .catch((e) => console.log("error", e));
  };
  console.log(perfil);
  console.log("valorEmail", email);
  console.log("ValorPassword", password);
  return (
    <div id="signupbox">
      <div id="encabezado">
        <img
          src="assets/getalent_logo.png"
          alt="getalent_logo"
          width="100px"
          height="100px"
        />
        <h1>GET TALENT</h1>
        <h3>Crea una cuenta</h3>
      </div>
      <form
        action=""
        className="form_registro"
        id="form_registro"
        onSubmit={HandleRegistro}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo electronico"
          className="controls"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$"
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          className="controls"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <input
          pattern={password}
          type="password"
          name="confirm_password id"
          confirm_password
          placeholder="Confirmacion de contraseña"
          className="controls"
          required
        />
        <br />
        <select
          name="user_type"
          id="user_type"
          className="controls"
          onChange={(e) => setPerfil(e.target.value)}
        >
          <option value={false}>Solicitante</option>
          <option value={true}>Empleador</option>
        </select>
        <br />
        <h6>
          Contraseña:
          <li>Mínimo 6 máximo 20 caracteres alfanuméricos </li>
          <li>Mínimo una mayúscula</li>
          <li>Mínimo un caracter númerico</li>
          <li>Mínimo un caracter especial (.-!?!)</li>
        </h6>

        <input type="submit" name="submit" id="submit" value="Registrarme" />
      </form>
    </div>
  );
}
export default RegistrationFrom;
