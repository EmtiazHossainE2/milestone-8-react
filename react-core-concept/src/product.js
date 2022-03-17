import './App.css'
const App = () => {

    const Products = [
        { name: 'Laptop', price: 70000, brand: 'HP', madeIn: 'China' },
        { name: 'Mobile', price: 20000, brand: 'Realme', madeIn: 'Koria' },
        { name: 'Watch', price: 3000, brand: 'apple', madeIn: 'US' },
        { name: 'TV', price: 30000, brand: 'LG', madeIn: 'China' },
        { name: 'Router', price: 2500, brand: 'D-link', madeIn: 'China' }
    ]

    return (
        <div className="App">
            <h2>Recap Core Concept </h2>
            <div className='product-container'>
                {
                    Products.map(({ name, price, brand }) => <Product Name={name} Price={price} Brand={brand} ></Product>)
                }
                {/* {
                    Products.map((product) => <Product Name={product.name} Price={product.price} Brand={product.brand} ></Product>)
                } */}
            </div>

        </div>
    )
}

const Product = (props) => {
    return (
        <div>
            <div className="single-style">
                <h2>Name : {props.Name}</h2>
                <h2>Price : {props.Price} </h2>
                <h3>Brand : {props.Brand}</h3>
            </div>

        </div>
    )
}


export default App;