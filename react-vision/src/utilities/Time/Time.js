const myFunc = () => {
    function tick() {
        let timet = new Date().toLocaleTimeString()
        return timet
    }

    let setTime = setInterval(tick, 1000);
    return setTime
}
// console.log(setTime);
export default myFunc;