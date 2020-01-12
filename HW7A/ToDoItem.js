import React from "react"

function TodoItem(props) {
    const mystyle = {
        textDecoration: "line-through"
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id) }
            />
            <p style={props.item.completed ? mystyle : null }>props.item.text</p>
        </div>
    )
}

export default TodoItem
