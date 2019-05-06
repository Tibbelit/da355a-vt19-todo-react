import React from 'react';

class Todo extends React.Component {
    
    render() {
        return (<li className="list-group-item">
            { this.props.item.title }
            <button className="btn btn-sm btn-danger" onClick={() => {this.props.deleteItem(this.props.item.id)}}>X</button>
        </li>)
    }
}

export default Todo;