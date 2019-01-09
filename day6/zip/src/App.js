import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Data from './components/Data.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      zip : "",
      searched: false,
      result: [],
    };
  }


  handleChange = (e)=>{
    console.log(e.keyCode);
    if (e.keyCode === 13){
      this.setState({zip: e.target.value});

      this.fetchZipData(e.target.value);
      //this.interval = setInterval(() => this.fetchZipData(e.target.value), 60 * 1000);
       this.setState({searched: true});
    }
  }



  fetchZipData(zip) {
    console.log(zip)
    axios.get("https://ctp-zip-api.herokuapp.com/zip/"+zip)
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

    const d = r.map((i) => <Data st= {i["State"]} loc= {[i["Lat"], i["Long"]]} pop = {i["EstimatedPopulation"]}  totwage= {i["TotalWages"]} city = {i["City"]} /> );

    if (!this.state.searched){
      return (
        <div className="App">
           <div className="App-header">
                <h2>Zip Code</h2>
            </div>
            <br/>
            <p> Zip Code: </p> <input className = "city" type="number" onKeyDown={this.handleChange}/>
            <br/><br/> No Result <br/>
        </div>
      );
    }
    else{
      return (
           
        <div className="App">
           <div className="App-header">
                <h2>Zip Code</h2>
            </div>
            <br/>
            <p> Zip Code: </p> <input className = "city" type="number"  onKeyDown={this.handleChange}/>
            
            {d}
        </div>
        );
    }
  }
}

export default App;
