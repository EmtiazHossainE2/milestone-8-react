import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from './Components/Cart/Cart';
const App = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div >
            <Cart></Cart>
        </div >
    );
};

export default App;