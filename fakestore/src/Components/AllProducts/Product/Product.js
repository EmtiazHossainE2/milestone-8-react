import React from 'react';
import ReactModal from '../../ReactModal/ReactModal';
import './Product.css'
const Product = (props) => {
    const { addCart } = props
    const { image, title, price } = props.product
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="col-md-4 ">
            <div className="cart p-2 m-3 bg text-center">
                <img className='w-50  m-auto  rounded p-1 ' src={image} alt="" />
                <p className=' '>{title.slice(0, 20)}</p>
                <div className='d-flex justify-content-around my-2'>
                    <button type='button' className="btn btn-primary" >Price : {price}</button>
                    <button type='button' className="btn btn-primary" onClick={addCart}>Add Cart</button>
                    {/* <button type='button' className="btn btn-primary" >Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default Product;