import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import Data from './components/Data.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city : "",
      searched: false,
      result: [],
    };
  }


  handleChange = (e)=>{
    console.log(e.keyCode);
    if (e.keyCode === 13){
      this.setState({city: e.target.value.toUpperCase()});

      this.fetchCityData(e.target.value.toUpperCase());
      //this.interval = setInterval(() => this.fetchZipData(e.target.value), 60 * 1000);
       this.setState({searched: true});
    }
  }



  fetchCityData(city) {
    console.log(city)
    axios.get("https://ctp-zip-api.herokuapp.com/city/"+city)
      .then(response => {
          this.setState({ result : response["data"]});
      })
      .catch(err =>  {
        this.setState({searched: false});
      });
  }



  render() {
    console.log(this.state.result);


    let r = this.state.result;

    const d = r.map((i) => <li> {i} </li>);

    if (!this.state.searched){
      return (
        <div className="App">
           <div className="App-header">
                <h2>City</h2>
            </div>
            <br/>
            <p> City: </p> <input className = "city" type="text" onKeyDown={this.handleChange}/>
            <br/><br/> No Result <br/>
        </div>
      );
    }
    else{
      return (
           
        <div className="App">
           <div className="App-header">
                <h2>City</h2>
            </div>
            <br/>
            <p> City: </p> <input className = "city" type="text"  onKeyDown={this.handleChange}/>
            
            {d}
        </div>
        );
    }
  }
}

export default App;
