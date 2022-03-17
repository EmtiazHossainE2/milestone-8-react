import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import TodoDisplay from './TodoDisplay/TodoDisplay';

const Todos = () => {
    const [toodos, setToodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setToodos(data.slice(0, 100)))
    }, []);
    return (
        <div>
            <div className='text-center mb-5'>
                <hr className='w-25 mx-auto p-1' />
                <h2 >Todos Here</h2>
                <Watch></Watch>
                <hr className='w-25 mx-auto p-1' />
                <h3>Total TODO : {toodos.length}</h3>
            </div>
            {
                toodos.map(todo => console.log(todo))
            }
            <div className='container-todo'>
                {
                    toodos.map(todo => <TodoDisplay
                        todo={todo}>

                    </TodoDisplay>)
                }
            </div>

        </div>
    );
};

export default Todos;