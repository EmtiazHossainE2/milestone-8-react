import React from 'react';
import './Article.css'

const ArticleNum = ['One', 'Two', 'Three', 'Four', 'Five']
const HeadingStyle = {
    backgroundColor: '#cfc3c3',
    padding: '10px',
    borderRadius: '10px'
}
const Article = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <article className='blog'>
                            <h3 style={HeadingStyle}>This is article {ArticleNum[0]}</h3>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, incidunt ipsum. Molestiae magni, fugiat quaerat eaque quia doloribus incidunt eos voluptas, esse ipsa ut animi at voluptatem impedit, optio architecto excepturi laboriosam ipsum sint maxime? Consequatur velit quis cupiditate porro fugiat eos! Quae officiis inventore hic impedit ipsa eos ipsam!</p>
                            <button className=" btn-style"> <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Explore More</a></button>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className='blog'>
                            <h3 style={HeadingStyle}>This is article {ArticleNum[1]}</h3>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, incidunt ipsum. Molestiae magni, fugiat quaerat eaque quia doloribus incidunt eos voluptas, esse ipsa ut animi at voluptatem impedit, optio architecto excepturi laboriosam ipsum sint maxime? Consequatur velit quis cupiditate porro fugiat eos! Quae officiis inventore hic impedit ipsa eos ipsam!</p>
                            <button className=" btn-style"> <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Explore More</a></button>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className='blog'>
                            <h3 style={HeadingStyle}>This is article {ArticleNum[2]}</h3>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, incidunt ipsum. Molestiae magni, fugiat quaerat eaque quia doloribus incidunt eos voluptas, esse ipsa ut animi at voluptatem impedit, optio architecto excepturi laboriosam ipsum sint maxime? Consequatur velit quis cupiditate porro fugiat eos! Quae officiis inventore hic impedit ipsa eos ipsam!</p>
                            <button className=" btn-style"> <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Explore More</a></button>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;