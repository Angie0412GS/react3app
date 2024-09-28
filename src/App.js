import React from "react";
import Contador from "./Contador";
import CicloDeVida from "./CicloDeVida";
import ContadorConCiclo from "./ContadorConCiclo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mostrarCicloDeVida: true,
      mostrarContadorConCiclo: true 
    };
  }

  toggleCicloDeVida = () => {
    this.setState((prevState) => ({
      mostrarCicloDeVida: !prevState.mostrarCicloDeVida,
    }));
  };

  toggleContadorConCiclo = () => {
    this.setState((prevState) => ({
      mostrarContadorConCiclo: !prevState.mostrarContadorConCiclo,
    }));
  };

  render() {
    const contenedorEstilo = {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px", 
    };

    return (
      <div style={{ padding: "20px" }}>
        <center>
          <h1>Estado y Ciclo de Vida</h1>
        </center>

        <div style={contenedorEstilo}>
          <div>
            <h2>Contador sencillo</h2>
            <Contador />
          </div>

          <div>
            <h2>Ciclo de vida</h2>
            <button onClick={this.toggleCicloDeVida}>
              {this.state.mostrarCicloDeVida
                ? "Ocultar Ciclo de vida"
                : "Mostrar Ciclo de vida"}
            </button>
            {this.state.mostrarCicloDeVida && <CicloDeVida />}
          </div>

          <div>
            <h2>Contador con ciclo de vida</h2>
            <button onClick={this.toggleContadorConCiclo}>
              {this.state.mostrarContadorConCiclo
                ? "Ocultar Contador"
                : "Mostrar Contador"}
            </button>
            {this.state.mostrarContadorConCiclo && <ContadorConCiclo />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
