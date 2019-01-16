import React, { Component } from "react";
import axios from 'axios';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      l: []
    };
  }

  getCampus = () =>{
      axios.get("http://localhost:3000/campus")
      .then(response => {
          this.setState({ l : response.data});
      })
      .catch(err =>  {
        console.log("wow");
      });
  }

  componentDidMount(){
    this.getCampus();
  }


  render() {
  	console.clear();

    let ret = this.state.l.map((i) => <p> {i.name} &emsp; &emsp;{i.address} <br/> {i.description} </p>);

    return (
    	<div className ="student_list">

        {ret}

    	</div>
    );
  }
}

export default Campus;