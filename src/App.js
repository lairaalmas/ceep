import { Component } from "react";
// quando informa so o diretorio retorna index.js
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      // aqui vai um JSX
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;