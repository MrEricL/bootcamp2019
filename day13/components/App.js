import React, { Component } from "react";
import Student from './Student';
import Campus from './Campus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	s: false,
    	c: false
    };
  }

  changeS = () =>{
  	this.setState({s: true, c: false});
  }

  changeC = () =>{
  	this.setState({s: false, c: true});
  }

  render() {
  	console.clear();
  	console.log(this.state.s, this.state.c);
  	if (this.state.s){
	    return (
	    	<div className ="body">
				<Student />	    		
	    	</div>
	    );
  	} 
  	if (this.state.c){
	    return (
	    	<div className ="body">
				<Campus />	    		
	    	</div>
	    );
  	}
  	else{
	    return (
	    	<div className ="body">
	    		<button className = "student" onClick = {this.changeS}> Student </button>
	    		<br /> <br />
	    		<button className = "campus" onClick = {this.changeC}> Campus </button> 
	    		<br /> <br />
	    		
	    	</div>
	    );
	}
  }
}

export default App;