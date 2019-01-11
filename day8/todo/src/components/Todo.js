import React, { Component} from 'react';


class Todo extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
            <p>Todos Comp</p>
            <p>{this.props.data.name}</p>
            </div>


        );
    }
}

export default Todo;
