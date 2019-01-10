import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.trendingApi();
  }

  trendingApi = () => {
    const key = "API_KEY";
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=" + key;
    console.log(url);

    axios
      .get(url)
      .then(response => {
        this.updateGif(response.data.data);
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateGif = r => {
    console.log("fired in:", this);
    this.setState({ data: r });
  };

  render() {
    const gifs = this.state.data.map(i => (
      <Card url={i.images.fixed_height.url} />
    ));
    return (
      <div className="App">
        <Search update={this.updateGif} />
        <button onClick={this.trendingApi}> Go to Trending </button>

        {gifs}
      </div>
    );
  }
}

export default App;
