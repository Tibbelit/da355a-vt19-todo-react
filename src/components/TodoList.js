import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    
    state = {
        todos: [{
            title: "First item",
            id: 0
        }],
        newTodo: '',
        lastId: 1
    }

    updateNewTodo = (event) => {
        this.setState({
            newTodo: event.target.value
        });
    }

    addItem = (event) => {
        if (event.keyCode == 13) {
            let todo = {
                title: this.state.newTodo,
                id: this.state.lastId
            };
            this.setState({
                todos: [...this.state.todos, todo],
                newTodo: '',
                lastId: this.state.lastId + 1
            });
        }
    }

    deleteItem = (id) => {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: todos
        });
    }

    render() {
        console.log(this.state.todos);
        return (<div>
            <input className="form-control" value={this.state.newTodo} placeholder="Add new todo here..."
                onChange={this.updateNewTodo} onKeyUp={this.addItem} />
            <ul className="list-group">
                { this.state.todos.map(todo => <Todo key={todo.id} item={todo} deleteItem={this.deleteItem} />) }
            </ul>
            <strong>{this.state.todos.length } </strong> { this.state.todos.length === 1 ? "todo" : "todos" } left to do.
        </div>)
    }
}

export default TodoList;