import React from 'react';
import AllProducts from '../../Components/AllProducts/AllProducts';
import Navbar from '../../Components/Navbar/Navbar';

const Home = (props) => {
    const { count, addCart, deleteCart } = props
    return (
        <div>
            <div className="container">
                <Navbar count={count} ></Navbar>
                <AllProducts addCart={addCart} deleteCart={deleteCart}></AllProducts>
            </div>

        </div>
    );
};

export default Home;