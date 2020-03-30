import React from "react";
import List from "./List";

import "./TodoList.css";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: "",
            taskList: []
        };
    }

    addNewTask = event => {
        event.preventDefault();
        this.setState({
            newTask: "",
            taskList: [...this.state.taskList, this.state.newTask]
        });
    };

    handleTaskInput = event => {
        this.setState({ newTask: event.target.value });
    };

    render() {
        return (
            <div className="todoListMain">
                <img className="logo" src="./todo-icon.png" alt="My Todo App" />
                <div className="header">
                    <form onSubmit={this.addNewTask}>
                        <input
                            placeholder="Enter a new task"
                            value={this.state.newTask}
                            onChange={this.handleTaskInput}
                        />
                        <button type="submit"> Add </button>
                    </form>
                </div>
                <List items={this.state.taskList} />
            </div>
        );
    }
}

export default TodoList;
