import React from 'react';
import tick from '../../utilities/Time/Time';

const Watch = () => {
    const time = tick()
    return (
        <div>
            <h2>It is {time}.</h2>
        </div>
    );
};

export default Watch;