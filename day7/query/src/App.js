import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import Card from "./components/Card";
import './Card.css';


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
      const key = "";
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
    this.setState({ data: r.splice(0,6) });
  };

  render() {
    const gifs = this.state.data.map(i => (
      <Card url={i.images.fixed_height.url} />
    ));
    return (
      < div class="trending">
        <Search update={this.updateGif} />
        <button class = "button" onClick={this.trendingApi}> Go to Trending </button>
        <div class="grids">
                {gifs}
        </div> 
      </div>
    );
  }
}

export default App;
