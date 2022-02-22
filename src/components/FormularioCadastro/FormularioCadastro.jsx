import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {

  // props é propriedade do elemento 'FormularioCadastro' passado em 'Apps.js'
  constructor (props) {
    // precisa chamar o construtor da classe pai (Component)
    super(props); 
    // aqui pode usar 'this' sem o 'bind' pois eh chamado exclusivamente pela classe
    this.titulo = '';
    this.texto = '';
  }

  // usando a convenção de _nomeFuncao para simular metodo "privado"
  _handleMudancaTitulo(evento) {
    // aqui se usar 'this' tem que fazer 'bind' pois no js o 'this' é dinâmico e pode nao pertencer a classe quando é chamado
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _criarNota(evento) {
    // previne que recarregue a pagina
    evento.preventDefault(); 
    // nao deixa propagar para cima na arvore do DOM
    evento.stopPropagation(); 
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          // 'bind' é importante para que o 'this' dentro de 'handleMudancaTitulo' referencie sempre da classe e não quem o chamou
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
      </form>
    );
  }
}