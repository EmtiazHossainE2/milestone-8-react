import './App.css'
import React from 'react';
// import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';


const App = () => {
    return (
        <div>
            <Header></Header>
            <Countries></Countries>
        </div>
    );
};

export default App;