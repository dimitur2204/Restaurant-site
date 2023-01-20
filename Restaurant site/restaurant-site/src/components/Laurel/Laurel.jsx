import React from 'react';
import './laurel.css';

const Laurel = ({image, title, text}) => {
    return (
        <div className = 'laurel'>
            <div className = 'laurel__image'>
                <img src = {image} alt = 'laurel_award'></img>
            </div>
            <div className = 'laurel__content'>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Laurel;