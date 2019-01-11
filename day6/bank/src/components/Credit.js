import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import Card from './Card'

class Credit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: this.props.accountBalance,
      credit: this.props.credit,
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
    console.log(val);
    console.log("this", this.state.credit);
    //let c = this.state.credit.push({"description":desc, "amount":val, "date": "123456"});

    this.setState({accountBalance: Number(bal) + Number(val), 
                  credit: [...this.state.credit, {"description":desc, "amount":val, "date": "123456"}], 
                  desc: "", 
                  val: 0,
                });
  }

  render() {
    const disp = this.state.credit.map((i) => <Card d = {i["description"]} a = {i["amount"]} dt = {i["date"]} />);
    //console.log(this.state.credit);

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

export default Credit;
