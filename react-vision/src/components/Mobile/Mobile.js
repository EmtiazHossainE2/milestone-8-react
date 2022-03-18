import React, { useState } from 'react';
import '../Article/Article.css'
const Mobile = () => {
    const [charge, setCharge] = useState(100)
    const batteryDown = () => {
        // return charge <= 0 ? 'Shut Down Now'  : 'setCharge(charge - 10)'

        if (charge <= 0) {
            alert('Shut Down Now')
        }
        else {
            setCharge(charge - 10)
        }
    }
    const batteryUp = () => {
        if (charge >= 100) {
            alert('Battery Full')
        }
        else {
            setCharge(charge + 10)
        }
    }
    return (
        <div className='text-center'>
            <h2 >Battery Charge : {charge} </h2>
            <div className='m-4'>
                <button onClick={batteryDown} className=" btn-style text-light me-3"> Battery Down</button>
                <button onClick={batteryUp} className=" btn-style text-light "> Charge Here</button>
            </div>
        </div>
    );
};

export default Mobile;
