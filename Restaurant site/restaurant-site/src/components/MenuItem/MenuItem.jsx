import React from 'react';
import './menuitem.css';

const MenuItem = ({title, price, tags}) => {
    return (
        <div className = 'menuitem'>
            <div className = 'menuitem__title'>
                <h5>{title}</h5>
                <div className = 'menuitem__title-price'>
                    <div></div>
                    <p>{price}</p>
                </div>
            </div>
            <div className = 'menuitem__tags'>
                <p>{tags}</p>
            </div>
        </div>
    );
}

export default MenuItem;