import React, { useEffect, useState } from 'react';
import './AllProducts.css'
import Product from './Product/Product';

const AllProducts = (props) => {
    const { addCart, deleteCart } = props
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className=' text-center'>
                <h2 >All Products</h2>
                <h3>Total Product {products.length}</h3>
            </div>
            <div className='row'>
                {
                    products.map(product => <Product
                        addCart={addCart} deleteCart={deleteCart}
                        product={product} key={product.id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;