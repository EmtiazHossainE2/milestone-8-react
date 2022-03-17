import React from 'react';
import './TodoDisplay.css'
const TodoDisplay = (props) => {
    const { title, id } = props.todo
    return (
        <div>
            <div className='single-todo'>
                <h2>Id : {id}</h2>
                <h4>Title : {title.slice(0, 15)}</h4>
            </div>
        </div>
    );
};

export default TodoDisplay;