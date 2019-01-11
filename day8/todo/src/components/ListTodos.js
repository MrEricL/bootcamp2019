import React, { Component} from 'react';
import Todo from './Todo';

class ListTodos extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    	var todos = this.props.value.map(todo => {

    		return <Todo data={todo}/>
    	});
    	

        return (
        	<div>

            	<p>ListTodos Comp</p>
            	{todos}
            	<Todo/>
            </div>
        );
    }
}

export default ListTodos;
