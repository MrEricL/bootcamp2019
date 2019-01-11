import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            d : this.props.d,
            a : this.props.a,
            dt : this.props.dt,
        };
    }
    
    render() {
        return (
            <div className="info">
            <p> Description: {this.state.d} | Amount: {this.state.a} | Date: {this.state.dt} </p>
         </div>
        );
    }
}

export default Card;