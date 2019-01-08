import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
    };
  }

  toggle = ()=>{
    this.setState({show: !this.state.show});
  }
  
  render() {
    let s = {padding: "30px"};
    let hide = this.state.show ? {} : {display: "none"};
    return (
      <div className="App" style = {s}>
        <p> Home  <button onClick = {this.toggle}> Toggle </button> </p>
        <div class = "subfolders" style = {hide}>
          <ul>
            <li> Folder 1 </li>
            <li> Folder 2 </li>
            <li> Folder 3 </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
