import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "David",
      showOff: false,
      temp: "David"
    };

    this.show = this.show.bind(this);
    this.save = this.save.bind(this);
    this.textchange = this.textchange.bind(this);
  }

  show(){
    this.setState({
      showOff: !this.state.showOff,
      temp: this.state.name,
    });
    console.log(this.state.showOff);
  }

  save(){
    
    this.setState({
      name: this.state.temp,
    });
    this.show();
  }

  textchange(e){
    this.setState({
      temp: e.target.value,
    });
  }

  render() {
    let rend = this.state.showOff ? {visibility: "visible"} : {visibility: "hidden"};
    let notrend = this.state.showOff ? {visibility: "hidden"}  : {visibility: "visible"};
    let pad = {padding: "10px"};
    return (
      <div style = {pad}>
        <div className="Part1" style  = {notrend}>
          <p> {this.state.name} </p> 
          <button onClick = {this.show}> Edit </button>
        </div>

        <div className="Part2" style = {rend}>
          <p><input type='text' value={this.state.temp} onChange = {this.textchange}/></p> 
          <button onClick = {this.save}> Save </button>
          <button onClick = {this.show} > Cancel </button>
        </div>
      </div>
    );
  }
}

export default App;
