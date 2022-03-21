const addToDb = id => {

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
export { addToDb }