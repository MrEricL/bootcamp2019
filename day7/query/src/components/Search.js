import React, { Component } from "react";
import axios from "axios";
import '../Card.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  change = e => {
    this.setState({ term: e.target.value });
  };

  apiCall = e => {
      const key = "";
    const q = this.state.term.split(" ").join("+");
    const url =
      "http://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + key;
    console.log(url);

    axios
      .get(url)
      .then(response => {
        this.props.update(response.data.data);
        console.log("ok");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
            <input type="text" className="search" onChange={this.change} />&nbsp;&nbsp;
        <br /><button className="submit" onClick={this.apiCall}> Submit </button>
      </div>
    );
  }
}

export default Search;
