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

    render() {
    const { todos, inputvalue } = this.state;

    return (
        <>
        <input
            type="text"
            value={inputvalue}
            onChange={this.onInputChange}
        />
        <br />

        <button onClick={this.addTodoList}>Add</button>
        <br />

        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
        </>
        );
    }
}

export default TodoList;
