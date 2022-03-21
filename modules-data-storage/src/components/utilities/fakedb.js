
const addToDb = id => {
    let shoppingCart = {};
    //get the shopping cart (second part ) 
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    // add quantity  (first part )
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}


export { addToDb, removeFromDb }
