import React, { Component } from 'react';

class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {

            st: this.props.st,
            loc: this.props.loc,
            pop: this.props.pop,
            totwage: this.props.totwage,

        };
    }
    


    render() {
        return (
            <div className="info">
                {this.state.st} <br/>
                {this.state.loc} <br/>
                {this.state.pop} <br/>
                {this.state.totwage} <br/>
           </div>
        );
    }
}

export default Data;