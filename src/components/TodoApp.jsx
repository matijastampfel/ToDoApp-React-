/* eslint-disable */
import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
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
        }; 
    }

    handleAddTodo (text) {
            alert('new todo: ' + text);
        }
    handleSearch (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });

    }

    render() {
        
        return (
            <div>
            <TodoSearch onSearch={this.handleSearch.bind(this)}/>
            <TodoList todos={this.state.todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>    
            </div>
        );
    }
}

export default TodoApp;