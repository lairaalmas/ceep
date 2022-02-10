import React, { Component } from "react"; // Component faz parte do react
import CardNota from "./CardNota.jsx";

// usando mesmo nome do arquivo para facilitar navegar pelo projeto
export default class ListaDeNotas extends Component {

  render() {
    return (
      <ul>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
      </ul >
    );
  }

} 