import { useState } from 'react';
import Home from '../../Pages/Home/Home';
import './Cart.css'
const Cart = () => {
    const [count, setCount] = useState(0)
    const addCart = () => setCount(count + 1);
    const deleteCart = () => {
        if (count <= 0) {
            return
        }
        else {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <Home count={count} addCart={addCart} deleteCart={deleteCart}></Home>
        </div>
    );
};

export default Cart;