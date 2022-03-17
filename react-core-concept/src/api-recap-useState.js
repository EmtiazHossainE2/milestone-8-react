import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <h2>Todos Api </h2>
            <Todo></Todo>
        </div>
    )
}

const Todo = () => {
    const [toods, settodos] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos`
        fetch(url)
            .then(res => res.json())
            .then(data => settodos(data))
    }, [])
    return (
        <div>
            <input id='search-Value' type="text" />
            <button >Search</button>
            <div className="api-container">
                {
                    toods.map(todo => <TodoDisplay Id={todo.id} Title={todo.title} ></TodoDisplay>)
                }
            </div>
        </div>
    )
}
const TodoDisplay = (props) => {
    return (
        <div className='single-style'>
            <h3>User id : {props.Id}</h3>
            <h2>Title : {props.Title}</h2>
        </div>
    )
}

export default App;