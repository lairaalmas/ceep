import React, { Component } from "react";
import "./estilo.css"; // precisa importar

export default class CardNota extends Component {
  
  // nesse caso nao precisa declarar explicitamente o construtor
  // constructor (props) {
  //   super(props);
  // }

  render() {
    return (
      /* usa 'className' pois 'class' é palavra reservada */
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}