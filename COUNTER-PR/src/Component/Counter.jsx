import React, { useEffect, useState } from 'react';

export default function UseEffectCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect is running");
    }, [count]);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter-container">
            <h1 className="counter-display">{count}</h1>
            <div className="button-group">
                <button className="counter-button" onClick={increment}>Add</button>
                <button className="counter-button" onClick={decrement}>Subtract</button>
                <button className="counter-button reset-button" onClick={reset}>Clear</button>
            </div>
        </div>
    );
}
