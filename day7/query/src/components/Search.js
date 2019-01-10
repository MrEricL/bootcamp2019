import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			term : "",
			links: [],
		};
	}

	change = (e) =>{
		this.setState({term: e.target.value});
	}

	apiCall = (e) =>{
        const key = "";
		const q = this.state.term.split(" ").join("+");
		const url = "http://api.giphy.com/v1/gifs/search?q="+q+"&api_key="+key;
		console.log(url);

	    axios.get(url)
	      .then(response => {
	      		let l = [];
	      		(response.data.data).forEach((i) => l.push(i.images.fixed_height.url));
	          this.setState({ links : l });
				console.log(l);
	      })
	      .catch(err =>  {
	        console.log(err);
	      });
	}


  render() {
    return (
      <div className="App">
      	<input type = "text" className = "search" onChange = {this.change}/>
      	<button onClick = {this.apiCall}> Submit </button>
      </div>
    );
  }
}

export default Search;
