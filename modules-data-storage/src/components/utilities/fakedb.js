

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








/* const addToDb = id => {

    const quantity = localStorage.getItem(id)
    if (quantity) {
        // const newQuantity = parseInt(quantity) + 1; parseInt diye num kora jay abar samne + diyeo kora jay 
        const newQuantity = +(quantity) + 1;
        localStorage.setItem(id, newQuantity)
    }
    else {
        // console.log('new added ');
        localStorage.setItem(id, 1)
    }
}
export { addToDb } */