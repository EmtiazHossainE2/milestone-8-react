import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const { name, population, area, flags, maps } = props.country
    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <p>Total Population : {population}</p>
            <p>Total Area : {area}</p>
            <img src={flags.png} alt="" />
            <button> <a target="_blank" rel="noopener noreferrer" href={maps.googleMaps}> Google Maps</a></button>
        </div>
    );
};

export default Country;