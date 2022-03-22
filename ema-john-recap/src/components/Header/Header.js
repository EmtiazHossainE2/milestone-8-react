import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div>
            <div className="header-container">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;