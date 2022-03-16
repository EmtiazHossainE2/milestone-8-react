import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h3>Name : {props.Name}</h3>
            <p>Total Population : {props.Population}</p>
            <img src={props.Flag} alt="" />
        </div>
    );
};

export default Country;