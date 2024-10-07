import React from 'react'

// props handed to cards through App.jsx. card renders todo item and buttons for func handling
export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick = {() =>{
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick = {() =>{
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-dumpster"></i>
                </button>

            </div>

        </li>
    )
}
