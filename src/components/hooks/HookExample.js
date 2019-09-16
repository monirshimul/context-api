import React, { useState } from 'react';

const HookExample = ()=> {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <p>You clicked {count} times</p>
            <button className="btn-primary" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default HookExample;