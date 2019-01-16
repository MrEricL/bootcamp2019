import React, { Component } from "react";
import axios from 'axios';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      l: []
    };
  }

  getStudent = () =>{
      axios.get("http://localhost:3000/student")
      .then(response => {
          this.setState({ l : response.data});
      })
      .catch(err =>  {
        console.log("wow");
      });
  }

  componentDidMount(){
    this.getStudent();
  }


  render() {
  	console.clear();

    let ret = this.state.l.map((i) => <p> {i.fname} {i.lname} &emsp; &emsp;{i.email} </p>);

    return (
    	<div className ="student_list">

        {ret}

    	</div>
    );
  }
}

export default Student;