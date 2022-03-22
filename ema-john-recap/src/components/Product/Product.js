import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div>
            <div className="product-container">
                <img src={img} alt="" />
                <div className="product-info">
                    <p>{name.slice(0, 18)}</p>
                    <p>Price : ${price}</p>
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Ratings : {ratings}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Product;