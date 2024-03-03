import React from 'react';
import classes from "./Pagination.module.css";


const Pagination = ( {handleNext, page, handlePrev}) => {
    return (
        <div className={classes.pagination}>
            <button className={classes.btn} onClick={handlePrev}>Prev</button>
            <p>{page}</p>
            <button className={classes.btn} onClick={handleNext}>Next</button>
        </div>
    );
};

export default Pagination;