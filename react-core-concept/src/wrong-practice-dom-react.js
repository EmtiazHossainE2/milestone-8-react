import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const [meals, setmeals] = useState([])
    const searchBtn = () => {
        const searchText = document.getElementById('search-text')
        const searchValue = searchText.value
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => setmeals(data.meals))
        searchText.value = ''
    }
    console.log(meals);
    return (
        <div className="App">
            <h2>Search Your Favourite Food  </h2>
            <input id='search-text' type="text" />
            <button onClick={searchBtn}>Search</button>
            <div className="api-container">
                {
                    meals.map(({ strMealThumb, strMeal, strInstructions }) => <Food meal={strMealThumb} Title={strMeal} Description={strInstructions.slice(0, 100)}></Food>)
                }
            </div>
        </div>
    )
}
const Food = (props) => {

    return (
        <div className='single-style'>
            <img src={props.meal} alt="" />
            <h2>{props.Title}</h2>
            <p>{props.Description}</p>
            <button className='button'>View More Info</button>
        </div>
    )
}


export default App;