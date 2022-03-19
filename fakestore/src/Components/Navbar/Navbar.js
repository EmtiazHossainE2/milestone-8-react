import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <h4><a href="/home" className='text-decoration-none'>FakeStore</a></h4>
                </div>
                <div className="col-md-9">
                    <nav>
                        <ul className=' text-primary  text-capitalize d-flex list-unstyled justify-content-end '>
                            <li>home</li>
                            <li>about</li>
                            <li>contact</li>
                            <li>cart</li>
                            <li>user</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;