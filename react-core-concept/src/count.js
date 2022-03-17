import { useState } from 'react'
import './App.css'
const App = () => {
    return (
        <div className="App">
            <Count></Count>
        </div>
    )
}
const btnStyle = {
    padding: '10px 30px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: 'Green',
    border: '0',
    borderRadius: '10px',
    color: '#ffffff'
}

const Count = () => {
    const [count, setCount] = useState(0)
    const Increase = () => setCount(count + 1)
    const Decrease = () => setCount(count - 1)
    // const Increase = () => {
    //     const newCount = count + 1
    //     setCount(newCount)
    // }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button style={btnStyle} onClick={Increase}>Increase</button>
            <button style={btnStyle} onClick={Decrease}>Decrease</button>
        </div>
    )
}


export default App;