import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakedb';
import './Laptop.css'

const Laptop = (props) => {
    const { name, price, picture, company, id } = props.laptop
    const addToCart = (id) => {
        //Create Event handler with parameters
        addToDb(id)
    }
    const removeFromCart = id => {
        removeFromDb(id)
    }
    return (
        <div className='single-laptop'>
            <h2>Name : {name}</h2>
            <p>Price : {price}</p>
            <h5>CPU : {picture}</h5>
            <strong>GPU : {company}</strong>
            <p><small>id : {id}</small></p>
            <button onClick={() => addToCart(id)}>Add Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove </button>
        </div>
    );
};

export default Laptop;