import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { handleCart, product } = props
    const { img, name, price, seller, ratings } = product
    return (
        <div>
            <div className="product-container">
                <img src={img} alt="" />
                <div className="product-info">
                    <p className='product-name'>{name.slice(0, 18)}</p>
                    <p className='product-price'>Price : ${price}</p>
                    <p className='seller'><small>Manufacturer : {seller}</small></p>
                    <p className='ratings'><small>Ratings : {ratings}</small></p>
                </div>
                <button className='cart-btn' onClick={() => handleCart(product)}>
                    <p>Add to Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Product;