import React from 'react'
import AddTodo from '../AddTodo'
import './ListTodo.scss'
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        todoList: [],
        editTodo: {}
    }
    handleAddNewTodo = (todo) => {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })
        toast.success("Add new todo successfully!")
    }
    handleDelete = (index) => {
        this.state.todoList.splice(index, 1)
        this.setState({
            todoList: this.state.todoList
        })
        toast.success("Delete successfully!")
    }
    handleEdit = (todo) => {
        this.setState({
            editTodo: todo
        })
    }
    handleChangeInputEdit = (e) => {
        this.setState({
            editTodo: {
                ...this.state.editTodo,
                title: e.target.value
            }
        })
    }
    handleSave = () => {
        let newTodos = this.state.todoList.map(item => {
            return item.id === this.state.editTodo.id ? item = this.state.editTodo : item
        })
        this.setState({
            todoList: newTodos,
            editTodo: {}
        })
        toast.success("Updated todo!")
    }
    render() {
        let { editTodo } = this.state
        let isEmptyObject = Object.keys(editTodo).length === 0
        return (
            <>
                <p>
                    Simple todo app with ReactJS
                </p>
                <div className='box-todo'>
                    <AddTodo
                        addTodo={this.handleAddNewTodo} />
                    <ul className='list-todo'>
                        {this.state.todoList.map((todo, index) =>
                            <li className='todo-item' key={index}>

                                {isEmptyObject === true ?
                                    <>
                                        {index + 1} - {todo.title}
                                        <button className='btn-edit'
                                            onClick={() => this.handleEdit(todo)}>edit</button>
                                    </>
                                    :
                                    <>
                                        {editTodo.id === todo.id ?
                                            <>
                                                {index + 1} - <input
                                                    value={editTodo.title}
                                                    onChange={(e) => this.handleChangeInputEdit(e)} />
                                                <button className='btn-save'
                                                    onClick={() => this.handleSave()}>Save</button>
                                            </>
                                            :
                                            <>
                                                {index + 1} - {todo.title}
                                                <button className='btn-edit'
                                                    onClick={() => this.handleEdit(todo)}>edit</button>
                                            </>
                                        }

                                    </>
                                }


                                <button className='btn-delete' onClick={() => this.handleDelete(index)}>Delete</button>
                            </li>)}
                    </ul>
                </div>
            </>
        )
    }
}
export default ListTodo