import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Card from './components/Card'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searched: false,
      data : [],
    }
  }

  componentDidMount(){
    if (!this.state.searched){
      this.trendingApi();
    }
  }

  trendingApi = ()=>{
      const key = "";
    const url = "http://api.giphy.com/v1/gifs/trending?api_key="+key;
    console.log(url);

      axios.get(url)
        .then(response => {
            this.setState({ data : response.data.data });
            console.log(this.state.data);

        })
        .catch(err =>  {
          console.log(err);
        });    
  }



  render() {
    const gifs = this.state.data.map(i => <Card url = {i.images.fixed_height.url}/>);
    return (
      <div className="App">
            <Search />
            
        {gifs}
      </div>
    );
  }
}

export default App;
