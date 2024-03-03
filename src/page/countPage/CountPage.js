import React, { useState } from 'react';
import classes from './CountPage.module.css';


const CountPage = () => {

    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className={classes.wrapper}>
            <button onClick={decrement}>Decrement</button>
            <p className={classes.text}>{count}</p>
            <button onClick={increment}>Increment</button>

        </div>
    );
};

export default CountPage;