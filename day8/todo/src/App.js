import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import ListTodos from "./components/ListTodos";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>ToDo App</header>
        <ListTodos/>
      </div>
    );
  }
}

export default App;
