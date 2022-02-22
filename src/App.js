import { Component } from "react";
// quando informa so o diretorio retorna index.js
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor () {
    super();
    // 'this.state' ja vem do react para atualizar o render quando ha mudança de estado
    this.state = {
      notas: []
    };
  }

  // (publico) conecta formulario com lista de notas
  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas    
    };
    // avisa para o render() que houve uma mudança de estado em 'notas'
    this.setState (novoEstado);
  }

  render() {
    return (
      // aqui vai um JSX
      <section className="conteudo">
        {/* 
        propriedades ou props: 'criarNota' 
        chama a função: 'criarNota'
        para usar em 'FormularioCadastro.js' tem que ser passada no construtor
        */}
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;