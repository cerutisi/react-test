import React, { useEffect } from 'react'
import Loader from "./Loader";
import TodoList from "./Todo/TodoList";
import Context from "./context";

const AddTodo = React.lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(import('./Todo/AddTodo'))
            }, 3000)
        })
)

function Employees() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://reqres.in/api/users?per_page=12')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos.data)
            })
    }, [])


    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    first_name: title,
                    id: Date.now(),
                }
            ])
        )
    }
    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='wrapper'>
                <h1>Задание 6</h1>
                <React.Suspense fallback={<Loader />}>
                    <AddTodo onCreate={addTodo} />
                </React.Suspense>
                <TodoList todos={todos}  />
            </div>
        </Context.Provider>
    )
}

export default Employees
