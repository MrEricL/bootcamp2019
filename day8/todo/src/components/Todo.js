import React, { Component} from 'react';


class Todo extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    	console.log('todo props', this.props);
        return (
        	<div>
            <p>Todos Comp</p>
            <p>{this.props.data.name}</p>
            </div>


        );
    }
}

export default Todo;
