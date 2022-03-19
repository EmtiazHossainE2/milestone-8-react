import React from 'react';
import './Product.css'
const Product = (props) => {
    const { image, description, price } = props.product
    return (
        <div>
            <div className='single-product '>
                <img src={image} alt="" />
                <p>{description.slice(0, 90)}</p>
                <div>
                    <button type='button' className="btn btn-primary ms-2">Price:${price}</button>
                    <button type='button' className="btn btn-primary ms-2" >Add Cart</button>
                    <button type='button' className="btn btn-primary ms-2">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;