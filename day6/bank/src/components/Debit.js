import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import Card from './Card'

class Debit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: this.props.accountBalance,
      debit: this.props.debit,
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
    console.log("this", this.state.debit);
    //let c = this.state.debit.push({"description":desc, "amount":val, "date": "123456"});

    this.setState({accountBalance: bal - val, 
                  debit: [...this.state.debit, {"description":desc, "amount":val, "date": "123456"}], 
                  desc: "", 
                  val: 0,
                });
  }

  render() {
    const disp = this.state.debit.map((i) => <Card d = {i["description"]} a = {i["amount"]} dt = {i["date"]} />);
    //console.log(this.state.debit);

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
        <h1>debit</h1>
        <AccountBalance accountBalance={this.state.accountBalance} />
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

export default Debit;

