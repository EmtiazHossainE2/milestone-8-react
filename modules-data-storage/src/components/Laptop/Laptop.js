import React from 'react';
import './Laptop.css'

const Laptop = (props) => {
    const { name, price, CPU, GPU, id } = props.laptop
    return (
        <div className='single-laptop'>
            <h2>Name : {name}</h2>
            <p>Price : {price}</p>
            <h5>CPU : {CPU}</h5>
            <strong>GPU : {GPU}</strong>
            <p><small>id : {id}</small></p>
        </div>
    );
};

export default Laptop;