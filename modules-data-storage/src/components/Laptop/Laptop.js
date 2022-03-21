import React from 'react';
import './Laptop.css'

const Laptop = (props) => {
    const { name, price, picture, company, id } = props.laptop
    const addToCart = (id, name) => {
        console.log('Added', id, name);
        //Create Event handler with parameters
    }
    return (
        <div className='single-laptop'>
            <h2>Name : {name}</h2>
            <p>Price : {price}</p>
            <h5>CPU : {picture}</h5>
            <strong>GPU : {company}</strong>
            <p><small>id : {id}</small></p>
            <button onClick={() => addToCart(id, name)}>Add Cart</button>
        </div>
    );
};

export default Laptop;