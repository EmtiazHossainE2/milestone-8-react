import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <h4><a href="/home" className='text-decoration-none'>FakeStore</a></h4>
                </div>
                <div className="col-md-9">
                    <nav>
                        <ul className=' text-primary  text-capitalize d-flex list-unstyled justify-content-end '>
                            <li><a href="/home">home</a></li>
                            <li><a href="/about">about</a></li>
                            <li><a href="/contact">contact</a></li>
                            <li><a href="/cart">cart <sup>{props.count}</sup></a></li>
                            <li><a href="/user">user</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;