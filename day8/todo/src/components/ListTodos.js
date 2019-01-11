import React, { Component} from 'react';
import Todo from './Todo';

class ListTodos extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
        		
            	<p>ListTodos Comp</p>
            	<Todo/>
            </div>
        );
    }
}

export default ListTodos;
