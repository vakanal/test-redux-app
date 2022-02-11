import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="column is-half">
        <div className="box">
          <p>Total</p>
          <strong>{this.props.valor}</strong>
        </div>
      </div>
    );
  }
}
