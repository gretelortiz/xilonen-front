import React from "react";
import "./PersonalInformation.css";

function PersonalInformation() {
  return (
    <div classname="box">
      <div classname="informationbox">
        <h1>Perfil Personal</h1>
        <form>
          <label htmlFor="Nombre">Nombre(s)</label> <br />
          <input type="text" name="Nombre" id="Nombre" placeholder="Ej.Maria" />
          <br />
          <label htmlFor="ApellidoParterno">Apellido Paterno</label> <br />
          <input
            type="text"
            name="ApellidoPaterno"
            id="a_paterno"
            placeholder="Ej.Ortiz "
          />
          <br />
          <label htmlFor="ApellidoMarterno">Apellido Materno</label> <br />
          <input
            type="text"
            name="ApellidoMaterno"
            id="a_materno"
            placeholder="Ej.Pérez "
          />
          <br />
          <select name="Sexo" id="sexo">
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Másculino</option>
            <option value="PrefieroNo">Preferiero no decirlo</option>
            <option value="Otro">Otro</option>
          </select>
          <br />
          <label htmlFor="FechaNacimiento">Fecha de nacimiento</label> <br />
          <input type="date" name="FechaNacimiento" id="fecha_nacimiento" />
          <br />
          <label htmlFor="EstadoCivil">Estado Civil</label> <br />
          <select name="EstadoCivil" id="EstadoCivil">
            <option value="Soltera">Soltera(o)</option>
            <option value="Casada">Casada(o)</option>
            <option value="Viuda">Viuda(o)</option>
            <option value="Divorciada">Divorciada(o)</option>
            <option value="UnionLibre">Unión Libre</option>
            <option value="PrefieroNo"> Prefiero no mencionarlo</option>
          </select>
          <br />
          <label htmlFor="Edad">Edad</label> <br />
          <input type="number" name="Edad" id="Edad" placeholder="35" />
          <br />
          <label htmlFor="email">Correo (opcional) </label> <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="micorreo@gmail.com"
          />
          <br />
          <label htmlFor="Residencia">Residencia actual</label> <br />
          <input
            type="text"
            name="Calle"
            id="Calle"
            placeholder="Calle y número"
          />
          <input type="text" name="Estado" id="Estado" placeholder="Estado" />
          <input
            type="text"
            name="Municipio"
            id="Municipio"
            placeholder="Municipio"
          />
          <input type="submit" value="Actualizar" />
        </form>
      </div>
    </div>
  );
}

export default PersonalInformation;
