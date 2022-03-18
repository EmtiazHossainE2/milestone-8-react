import React from 'react';

const Watch = () => {
    const tick = () => {
        new Date().toLocaleTimeString()
    }
    setInterval(tick, 1000);
    return (
        <div>
            <h2>It is {tick}</h2>
        </div>
    );
};

export default Watch;
