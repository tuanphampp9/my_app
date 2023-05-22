import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        todo: ''
    }
    handleChangeInput = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    handleOnClick = () => {
        let newTodo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.todo
        }
        if (!this.state.todo) {
            toast.error("You don't enter your job yet!")
            return;
        }
        this.props.addTodo(newTodo)
        this.setState({
            todo: ''
        })
    }
    render() {
        return (
            <div>
                <input
                    value={this.state.todo}
                    onChange={(e) => this.handleChangeInput(e)} />
                <button
                    onClick={() => this.handleOnClick()}>Add</button>
            </div>)
    }
}

export default AddTodo