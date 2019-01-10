import React, { Component } from 'react';
import '../Card.css'; 

class Card extends Component {
  render() {

    return (
        <div className="App">
            <h1 className="Cards">
                <div className="Giphs">
                    <img src={this.props.url} />
                </div>
            </h1>
      </div>
    );
  }
}

export default Card;