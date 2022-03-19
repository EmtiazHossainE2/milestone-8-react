import React, { useEffect, useState } from 'react';
import './AllProducts.css'
import Product from './Product/Product';

const AllProducts = () => {
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
            <div className='product-container'>
                {
                    products.map(product => <Product
                        product={product} key={product.id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;