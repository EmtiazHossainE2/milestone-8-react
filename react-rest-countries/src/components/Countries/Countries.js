import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <div className="container">
                <h2>Travel  {countries.length} Country All Over The World</h2>
                <div className='countries'>
                    {
                        countries.map(country =>
                            <Country Name={country.name.common} Population={country.population} Flag={country.flags.png}></Country>)
                    }
                </div>
            </div>
        </div>
    );
};
const Country = (props) => {
    return (
        <div className='country'>
            <h3>Name : {props.Name}</h3>
            <p>Total Population : {props.Population}</p>
            <img src={props.Flag} alt="" />
        </div>
    )
}

export default Countries;