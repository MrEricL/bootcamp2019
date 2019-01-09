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
              <div className="title">
                <h3>{this.state.city}</h3> <br/>
            </div>
            <div className="body">
                <ul>
                    <li>State: {this.state.st} <br/></li> 
                    <li>Location: ({this.state.loc[0]},{this.state.loc[1]}) <br/></li> 
                    <li>Population(estimated): {this.state.pop} <br/></li> 
                    <li>Total Wages: {this.state.totwage} <br/></li> 
                </ul>
            </div>
         </div>
        );
    }
}

export default Data;