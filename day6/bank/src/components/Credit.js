import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import Card from './Card'

class Credit extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      credit: [],
      val: 0,
      desc: "",
    };
  }


  changeText = (e) =>{
    this.setState({val: e.target.value});
  }

  changeDesc = (e) =>{
    this.setState({desc: e.target.value});
  }

  submit = (e) =>{
    let val = this.state.val;
    let desc = this.state.desc;
    let bal = this.state.accountBalance;
    let c = this.state.credit.push({"description":desc, "amount":val, "date": "123456"});
    this.setState({accountBalance: bal + val, credit: c, desc: "", val: 0});
  }

  render() {
    const disp = this.state.credit.map((i) => <Card d = {i["description"]} a = {i["amount"]} dt = {i["date"]} />);


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
        <h1>Credit</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        Numb: <input type="text" onChange={this.changeText}/>
        <br />
        Descrip: <input type="text" onChange={this.changeDesc}/>
        <br />
        <button onClick={this.submit}> Add </button>
        {disp}
      </div>
    );
  }
}

export default Credit;
