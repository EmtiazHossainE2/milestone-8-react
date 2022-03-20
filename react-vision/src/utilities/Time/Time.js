function tick() {
    return new Date().toLocaleTimeString()
}

setInterval(tick, 1000);
export default tick;