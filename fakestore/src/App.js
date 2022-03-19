import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
const App = () => {
    const [count, setCount] = useState(0)
    const addCart = () => setCount(count + 1);
    const deleteCart = () => {
        if (count <= 0) {
            return
        }
        else {
            setCount(count - 1)
        }
    }
    return (
        <div >
            <Home count={count} addCart={addCart} deleteCart={deleteCart}></Home>
        </div >
    );
};

export default App;