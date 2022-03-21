import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'
const Laptops = () => {
    // const laptops = [
    //     { name: 'Asus ROG Zephyrus G15', price: '1550', GPU: '  Nvidia GeForce RTX 3060', CPU: 'Intel Core i9-11900H', id: '1' },
    //     { name: 'Alienware m17 R4', price: '1550', GPU: ' Nvidia RTX 3080', CPU: 'Intel Core i9-10980HK', id: '2' },
    //     { name: 'Dell G3 15', price: '1550', GPU: ' Nvidia GTX 1660 Ti Max-Q', CPU: ' Intel Core i7-9750H', id: '3' },
    //     { name: 'Asus ROG Flow X13', price: '1550', GPU: ' Nvidia GTX 1650 Max-Q/ Nvidia RTX 3080', CPU: ' AMD Ryzen 9 5980HS', id: '4' }
    // ]
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    return (
        <div>
            <h2>Best gaming laptop</h2>
            <div className='laptops-container'>
                {
                    laptops.map(laptop => <Laptop
                        key={laptop.id}
                        laptop={laptop}
                    ></Laptop>)
                }
            </div>
        </div>
    );
};

export default Laptops;