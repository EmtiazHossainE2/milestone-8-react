import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // cart handle using parameter 
    const [cart, setCart] = useState([])
    const handleCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleCart={handleCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Order Summary</h3>
                    <p>Selected Items : {cart.length} </p>
                    <p>Total Price </p>
                    <p>Total Shipping Charge :</p>
                    <p>Tax : $5</p>
                    <h3>Grand Total : </h3>
                    <button className='clear-cart'>
                        <p>Clear Cart <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
                    </button>
                    <button className='review-order'>
                        <p>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;