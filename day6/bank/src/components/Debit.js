import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Debit extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      debit: []
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <h1>Debit</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        Numb: <input type="text" />
        <br />
        Descrip: <input type="text" />
        <br />
        <button> Add </button>
      </div>
    );
  }
}

export default Debit;
