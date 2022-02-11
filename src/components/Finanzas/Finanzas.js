import React, { Component } from "react";

export default class Finanzas extends Component {
  render() {
    return (
      <div className="column is-half">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Acckiones</th>
            </tr>
          </thead>
          <tbody>
            {this.props.finanzas.map((x, i) => (
              <tr key={i}>
                <td>{x.desc}</td>
                <td>{x.cant}</td>
                <td>
                  <button
                    className="button is-warning"
                    onClick={() => this.props.eliminarFinanza(i)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
