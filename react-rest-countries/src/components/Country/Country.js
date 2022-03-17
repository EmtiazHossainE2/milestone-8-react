import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, area, flags } = props.country
    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <p>Total Population : {population}</p>
            <p>Total Area : {area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;