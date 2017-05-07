/* eslint-disable */
import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const {id, text, completed} = this.props;
       
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
            <input type="checkbox" checked={completed}/>
               {text} 
            </div>
        );
    }
}

export default Todo;  