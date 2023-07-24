import React, { useState } from 'react'
import useTodosStore from './states/todos'
import { shallow } from 'zustand/shallow'

const AddTodo = () => {

    const { addTodo, title, setTitle, completed, setCompleted } = useTodosStore(state => ({
        addTodo: state.addTodo,
        title: state.title,
        setTitle: state.setTitle,
        completed: state.completed,
        setCompleted: state.setCompleted,
    }), shallow)

    const submitHandler = (e) => {
        e.preventDefault()
        addTodo({
            id: Math.random(),
            title,
            completed
        })
    }
  return (
    <form onSubmit={submitHandler}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Todo' /> <br />
        <label>
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} /> {completed ? 'Completed' : 'Not Completed'}
        </label>
        <br />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo