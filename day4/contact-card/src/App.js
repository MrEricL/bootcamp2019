import React, { Component } from 'react'; 
import './App.css';

const card = {"display": "flex",
              "flex-direction": "column",
              "background-color": "red",
              "width": 400,
              "padding": "10px",
              "color": "gold"};


class ContactCard extends Component{
  constructor(props){
    super(props); 
  }

  render(){
      return(
        <div class = "card">
          <div class = "info">
            <p>{this.props.name}</p> 
            <p>{this.props.email}</p> 
            <p>{this.props.mobile}</p> 
            <p>{this.props.work} </p>
            </div>
            <div class="fancy"></div>
          </div>
        );
  }
}

class App extends Component {
  constructor(props){
    super(props);
  }
 
  render() {
    return (
      <div>
      <ContactCard name="Bob" mobile = "12356789" work = "45678910" email = "fake@gmail.com" /> <br />
      <ContactCard name="Bob" mobile = "123456789" work = "45678910" email = "fake@gmail.com" /><br />
      <ContactCard name="Bob" mobile = "123456789" email = "fake@gmail.com" /><br />
      </div>
      );
  }
}

export default App;
