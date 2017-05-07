/* eslint-disable */
import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import uuid from 'node-uuid'; //!! DO NOT DELETE IT, IT IS USED FOR UNIQUE ID's !!

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                    {
            id: uuid(),
            text: 'Walk the dog'
        },
            {
            id: uuid(),
            text: 'Clean the yard'
        },
        {
            id: uuid(),
            text: 'Clean house'
        },
        {
            id: uuid(),
            text: 'Code'
        }
            ]
        }; 
    }

    handleAddTodo (text) {
            this.setState({
                todos:[
                    ...this.state.todos,
                    {
                        id: uuid(),
                        text: text
                    }
                ]
            });
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
            <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>    
            </div>
        );
    }
}

export default TodoApp;