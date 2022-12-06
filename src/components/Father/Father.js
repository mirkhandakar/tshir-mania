import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';


const Father = ({ house }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House: {house}</p>
            <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;