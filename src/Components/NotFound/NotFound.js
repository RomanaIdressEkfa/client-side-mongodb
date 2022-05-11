import React from 'react';
import './NotFound.css'
import image from '../../../src//Images//404.jpg'

const NotFound = () => {
    return (
        <div >
            <img className="not-found" src={image} alt="" />
        </div>
    );
};

export default NotFound;