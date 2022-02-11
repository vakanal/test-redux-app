import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cant: "",
      desc: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.agregarFinanza({
      desc: this.state.desc,
      cant: Number(this.state.cant),
    });

    this.setState({
      cant: "",
      desc: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="column is-half">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                value={this.state.desc}
                placeholder="Description"
                onChange={(event) =>
                  this.setState({
                    desc: event.target.value,
                  })
                }
              />
              <span className="icon is-small is-left">
                <i className="fas fa-align-justify" />
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                value={this.state.cant}
                placeholder="Cantidad"
                onChange={(event) =>
                  this.setState({
                    cant: event.target.value,
                  })
                }
              />
              <span className="icon is-small is-left">
                <i className="fas fa-money-bill-alt" />
              </span>
            </p>
          </div>
          <button className="button is-primary" type="submmit" value="Enviar">
            Enviar
          </button>
        </div>
      </form>
    );
  }
}
