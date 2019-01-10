import React, { Component } from 'react';


class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			url : this.props.url, 
		};
	}


  componentDidMount(){
    console.log(this.state.url);
  }

  render() {

    return (
      <div className="App">
      </div>
    );
  }
}

export default Card;