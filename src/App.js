import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro.jsx";
import ListaDeNotas from "./components/ListaDeNotas.jsx";

class App extends Component {
  render() {
    return (
      // aqui vai um JSX
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;