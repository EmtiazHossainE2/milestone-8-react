import React from 'react';
import AllProducts from '../../Components/AllProducts/AllProducts';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <div className="container">
                <Navbar></Navbar>
                <AllProducts></AllProducts>
            </div>

        </div>
    );
};

export default Home;