import { useState } from "react"

// handles user input. func and array from props through App.jsx
export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    

    return (
        <header>
            <input value={todoValue} onChange={(e) => { setTodoValue(e.target.value) }} placeholder="Enter Todo ..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}