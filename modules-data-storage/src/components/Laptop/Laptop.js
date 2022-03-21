import React from 'react';
import './Laptop.css'

const Laptop = (props) => {
    const { name, price, picture, company, id } = props.laptop
    return (
        <div className='single-laptop'>
            <h2>Name : {name}</h2>
            <p>Price : {price}</p>
            <h5>CPU : {picture}</h5>
            <strong>GPU : {company}</strong>
            <p><small>id : {id}</small></p>
        </div>
    );
};

export default Laptop;