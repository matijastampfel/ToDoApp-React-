/* eslint-disable */
import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                    {
            id: 1,
            text: 'Walk the dog'
        },
            {
            id: 2,
            text: 'Clean the yard'
        },
        {
            id: 3,
            text: 'Clean house'
        },
        {
            id: 4,
            text: 'Code'
        }
            ]
        }
    }
    

    render() {
        
        return (
            <div>
            <TodoList todos={this.state.todos}/>    
            </div>
        );
    }
}

export default TodoApp;