import React from "react";
import "./PersonalInformation.css";

function PersonalInformation() {
  return (
    <div id="box">
      <div id="informationbox">
        <h1>Perfil Personal</h1>
        <form>
          <label htmlFor="Nombre">Nombre(s)</label> <br />
          <input type="text" name="Nombre" id="Nombre" placeholder="Alexa" required />
          <br />
          <label htmlFor="ApellidoParterno">Apellido Paterno</label> <br />
          <input
            type="text"
            name="ApellidoPaterno"
            id="a_paterno"
            placeholder="Ortiz "
            required
          />
          <br />
          <label htmlFor="ApellidoMarterno">Apellido Materno</label> <br />
          <input
            type="text"
            name="ApellidoMaterno"
            id="a_materno"
            placeholder="Pérez "
            required
          />
          <br />
          <label htmlFor="Genero">Sexo</label> <br />
          <select name="Sexo" id="sexo">
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Másculino</option>
            <option value="PrefieroNo">Preferiero no decirlo</option>
            <option value="Otro">Otro</option>
          </select>
          <br />
          <label htmlFor="FechaNacimiento">Fecha de nacimiento</label> <br />
          <input type="date" name="FechaNacimiento" id="fecha_nacimiento" required/>
          <br />
          <label htmlFor="EstadoCivil">Estado Civil</label> <br />
          <select name="EstadoCivil" id="EstadoCivil"required>
            <option value="Soltera">Soltera(o)</option>
            <option value="Casada">Casada(o)</option>
            <option value="Viuda">Viuda(o)</option>
            <option value="Divorciada">Divorciada(o)</option>
            <option value="UnionLibre">Unión Libre</option>
            <option value="PrefieroNo"> Prefiero no mencionarlo</option>
          </select>
          <br />
          <label htmlFor="Edad">Edad</label> <br />
          <input type="number" name="Edad" id="Edad" placeholder="35" required/>
          <br />
          <label htmlFor="email">Correo (opcional) </label> <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="micorreo@gmail.com"
            required
          />
          <br />
          <label htmlFor="Residencia">Residencia actual</label> <br />
          <input
            type="text"
            name="Calle"
            id="Calle"
            placeholder="Calle y número"
            required
          />
          <br />
          <select name="Estado" id="Estado" required>
            <option value="Estado">Ciudad de México</option>
            <option value="Estado">Aguascalientes</option>
            <option value="Estado">Baja California</option>
            <option value="Estado">Baja California Sur</option>
            <option value="Estado">Campeche</option>
            <option value="Estado">Chiapas</option>
            <option value="Estado">Chihuahua</option>
            <option value="Estado">Coahuila de Zaragoza</option>
            <option value="Estado">Colima</option>
            <option value="Estado">Durango</option>
            <option value="Estado">Guanajuato</option>
            <option value="Estado">Guerrero</option>
            <option value="Estado">Hidalgo</option>
            <option value="Estado">Jalisco</option>
            <option value="Estado">México</option>
            <option value="Estado">Michoacán de Ocampo</option>
            <option value="Estado">Nuevo León</option>
            <option value="Estado">Oaxaca</option>
            <option value="Estado">Puebla</option>
            <option value="Estado">Querétaro</option>
            <option value="Estado">Quintana Roo</option>
            <option value="Estado">San Luis Potosí</option>
            <option value="Estado">Sinaloa</option>
            <option value="Estado">Sonora</option>
            <option value="Estado">Tabasco</option>
            <option value="Estado">Tamaulipas</option>
            <option value="Estado">Tlaxcala</option>
            <option value="Estado">Veracruz</option>
            <option value="Estado">Yucatán</option>
            <option value="Estado">Zacatecas</option>
            </select>      
          
          <input type="text" name="Municipio" id="Municipio" placeholder="Municipio" required/>
          <br />
          <input type="submit" value="Actualizar" />
        </form>
      </div>
    </div>
  );
}

export default PersonalInformation;
