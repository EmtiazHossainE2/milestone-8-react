import React from 'react';
import Author1 from './Author1/Author1';
import Author2 from './Author2/Author2';
import Author3 from './Author3/Author3';
import './Blog.css'

const Blog = () => {
    return (
        <div className=' container blog-container pt-3'>
            <h2 className='text-center mt-2 mb-5'>Our Honorable Author </h2>
            <div >
                <div className="row text-center my-5">
                    <div className="col-md-4 py-4 rounded text-light" id='author1'>
                        <Author1></Author1>
                    </div>
                    <div className="col-md-4 py-4 rounded text-light" id='author2'>
                        <Author2></Author2>
                    </div>
                    <div className="col-md-4 py-4 rounded text-light" id='author3'>
                        <Author3></Author3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;