import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // Default list items can be deleted 
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat healthy',
    'Pick up kids'
  ]);

  const [todoValue, setTodoValue] = useState('')

  // func that allows items in list to stay
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList
    }))
  }

  // func adds items to todo list
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  // func deletes item in todo list
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)

  }

  // deletes item then allows edit in entry field 
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)

  }

  // for using local storage to keep todo list  
  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  // h1 updated 
  return (
    <>
    <h1>Productivity Planner</h1>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo= {handleEditTodo} todos={todos} />
    </>
  )
}

export default App
