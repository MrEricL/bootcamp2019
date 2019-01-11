import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      accountBalance : this.props.accountBalance,
    }
  }
  render() {
    console.log(this.props);
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
        <h1>Bank of React</h1>

        <Link to="/userProfile">User Profile</Link> <br/>
        <Link to="/credit">Credit</Link><br/>
        <Link to="/debit" >Debit</Link><br/>

        <AccountBalance accountBalance={this.state.accountBalance} />
      </div>
    );
  }
}

export default Home;
