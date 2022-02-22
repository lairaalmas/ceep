import React, { Component } from "react"; // 'Component' faz parte do react
import CardNota from "../CardNota/";
import "./estilo.css";

// usando mesmo nome do arquivo para facilitar navegar pelo projeto
export default class ListaDeNotas extends Component {

  // nessecaso nao precisa declarar explicitamente o construtor
  // constructor (props) {
  //   super(props);
  // }

  render() {

    return (
      <ul className="lista-notas">
        {/* um 'for' puro nao funciona no jsx 
        'map' funciona oprque retorna uma lista - 'foreach' não funciona */ }
        {this.props.notas.map((nota, i) => {
          return (
            /* key é do proprio jsx e serve para identificar qual elemento teve mudança */
            <li className="lista-notas_item" key={i}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }

}
