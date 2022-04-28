import React from "react";
import "./PresentationForm.css";
import { useState } from "react";

function PresentationForm() {
  const [video, setURL] = useState("");
  return (
    <div id="link">
      <h1>¡Preséntate!</h1>
      <form action="">
        <p>Te invitamos a grabar un video presentándote.</p>
        <p>
          Súbelo a la plataforma de tu preferencia <br />
          (YouTube, Vimeo, etc) y cópialo aquí abajo
        </p>
        <input
          type="url"
          placeholder="Sube tu URL"
          onChange={(e) => setURL(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Actualizar" />
      </form>
    </div>
  );
}

export default PresentationForm;
