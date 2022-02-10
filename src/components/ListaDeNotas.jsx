import React, { Component } from "react"; // Component faz parte do react
import CardNota from "./CardNota.jsx";

// usando mesmo nome do arquivo para facilitar navegar pelo projeto
export default class ListaDeNotas extends Component {

  render() {

    return (
      <ul>
        {/* um "for" puro nao funciona  nao funcionaria */ }
        {["Trabalho", "Trabalho", "Estudo"].map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }

}
