import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: props.start,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    if (this.state.counter > 0){
      this.setState({counter: this.state.counter - 1});
    }
    else{
      alert("no negative");
    }
  }

  render() {
    return (
      <div className="App">
        <br/><br/>
        Counter: {this.state.counter} 
        <br/><br/>
        <button onClick = {this.handleClick}>
          Decrement
        </button>
       
      </div>
    );
  }
}

export default App;


/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: props.start,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    if (this.state.counter > 0){
      this.setState({counter: this.state.counter - 1});
    }
    else{
      alert("no negative");
    }
  }

  render() {
    return (
      <div className="App">
        <br/><br/>
        Counter: {this.state.counter} 
        <br/><br/>
        <button onClick = {this.handleClick}>
          Decrement
        </button>
       
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App start = "5" />, document.getElementById('root'))


*/