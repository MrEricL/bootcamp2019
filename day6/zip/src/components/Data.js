import React, { Component } from 'react';
import './Data.css';

class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {

            st: this.props.st,
            loc: this.props.loc,
            pop: this.props.pop,
            totwage: this.props.totwage,
            city : this.props.city

        };
    }
    


    render() {
        return (
            <div className="info">
                <h3>{this.state.city}</h3> <br/>
                {this.state.st} <br/>
                {this.state.loc} <br/>
                {this.state.pop} <br/>
                {this.state.totwage} <br/>
           </div>
        );
    }
}

export default Data;