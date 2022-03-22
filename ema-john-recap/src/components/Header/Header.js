import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header-container">
                <a href="/shop"><img src={logo} alt="" /></a>
                <nav>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/review">Order Review </a></li>
                        <li><a href="/inventory">Manage Inventory </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;