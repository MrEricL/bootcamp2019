import React, { Component } from 'react';
class Card extends Component {
  render() {

    return (
        <div className="App">
            <h1 className="Cards">
                <img src={this.props.url}/>
            </h1>
      </div>
    );
  }
}

export default Card;