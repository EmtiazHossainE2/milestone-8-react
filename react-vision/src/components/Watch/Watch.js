import React, { useState } from 'react';
// import myFunc from '../../utilities/Time/time';

const Watch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    function tick() {
        setTime(new Date().toLocaleTimeString())
    }

    setInterval(tick, 1000);

    return (
        <div>
            <h2>It is {time}.</h2>
        </div>
    );
};

export default Watch;