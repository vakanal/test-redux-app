import React, { Component } from "react";
import { connect } from "react-redux";
import { agregar, eliminar } from "./reducers/finanzas/finanzas";
import { fetchUsuarios } from "./reducers/usuarios/usuarios";
import Titulo from "./components/Titulo/Titulo";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Finanzas from "./components/Finanzas/Finanzas";

class App extends Component {
  render() {
    const { finanzas, agregarFinanza, eliminarFinanza, fetchUsuarios } =
      this.props;
    const total = finanzas.reduce((acc, el) => acc + el.cant, 0);

    return (
      <div className="section">
        <div className="container">
          <Titulo />
          <button onClick={fetchUsuarios}>Fetch Usuarios</button>
          <Form agregarFinanza={agregarFinanza} />
          <Dashboard valor={total} />
          <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  agregarFinanza: (finanza) => dispatch(agregar(finanza)),
  eliminarFinanza: (index) => dispatch(eliminar(index)),
  fetchUsuarios: () => dispatch(fetchUsuarios()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
