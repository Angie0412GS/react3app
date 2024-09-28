import React from "react";

class ContadorConCiclo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  // Método para incrementar el contador
  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  componentDidMount() {
    console.log("El componente ContadorConCiclo se ha montado");
  }

  componentDidUpdate() {
    console.log("El componente ContadorConCiclo se ha actualizado");
  }

  componentWillUnmount() {
    console.log("El componente ContadorConCiclo se va a desmontar");
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorConCiclo;