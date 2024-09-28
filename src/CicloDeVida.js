import React from "react";

class CicloDeVida extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: "Haga clic en el botón" };
  }

  componenteCambiar = () => {
    this.setState({ mensaje: "¡Mensaje cambiado!" });
  };

  componentDidMount() {
    console.log("El componente CicloDeVida se ha montado");
  }

  componentDidUpdate() {
    console.log("El componente CicloDeVida se ha actualizado");
  }

  componentWillUnmount() {
    console.log("El componente CicloDeVida se va a desmontar");
  }

  render() {
    return (
      <div>
        <p>{this.state.mensaje}</p>
        <button onClick={this.componenteCambiar}>Actualizar mensaje</button>
      </div>
    );
  }
}

export default CicloDeVida;