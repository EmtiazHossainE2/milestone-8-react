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
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>Visit Every Country Invest No Money !!</h2>
        </div>
    )
}

export default App