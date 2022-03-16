import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="container">
                <div className='header'>
                    <h2 className='logo'><a href="/home">Logo Here</a></h2>
                    <nav>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/product">Product</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;