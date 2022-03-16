import { useEffect, useState } from 'react'
import './App.css'


const App = () => {
    return (
        <div className="App">
            <LoadCountries></LoadCountries>
        </div>
    )
}
const LoadCountries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Visit Every Country Invest No Money !!</h2>
            <h3>Available Country : {countries.length}</h3>
            {
                countries.map(country =>
                    <Country Name={country.name.common} Population={country.population} Flag={country.flags.png}></Country>
                )
            }
        </div>
    )
}
function Country(props) {
    return (
        <div className='single-style'>
            <h2>Name : {props.Name}</h2>
            <p>Population : {props.Population}</p>
            <img src={props.Flag} alt="" />
        </div>
    )
}

export default App