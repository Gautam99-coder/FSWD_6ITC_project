import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
    super(props);
    this.state = {
        todos: [],
        inputvalue: ""
    };
}

    onInputChange = (e) => {
    this.setState({ inputvalue: e.target.value });
    };

    addTodoList = () => {
        if (this.state.inputvalue.trim() === "") return;

    const newentry = {
        id: Date.now(),
        text: this.state.inputvalue,
        completed: false
    };

    this.setState((prevState) => ({
        todos: [newentry, ...prevState.todos],
        inputvalue: ""
    }));
};
    deleteTask=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.filter((y)=>y.id!=id),
        }))
    }

    render() {
    const { todos, inputvalue } = this.state;

    return (
        <>
        <input
            type="text"
            value={inputvalue}
            onChange={this.onInputChange}
        />
        <br/>
        <button onClick={this.addTodoList}>Add</button>
        <br />
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                <input type="Checkbox" value={todo.completed} />
                {todo.text}
                <button onClick={()=> this.deleteTask(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </>
        );
    }
}

export default TodoList;
