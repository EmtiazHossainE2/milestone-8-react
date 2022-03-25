import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] = useState([])
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value)
    }
    return (
        <div>
            <div className='App'>
                <h2>Search Your Favorite Food </h2>
                <input onChange={searchFood} type="text" />
                <button>Search</button>
            </div>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>

        </div>
    );
};

export default Restaurant;