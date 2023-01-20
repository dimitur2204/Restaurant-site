import React from 'react';
import './newsletter.css';
import {images} from '../../constants';

const NewsLetter = () => {
    const [currentInput, setCurrentInput] = React.useState('');
    return (
        <div className = 'newsletter'>
            <div className = 'newsletter__heading'>
                <h3>Newsletter</h3>
                <img src = {images.spoon} alt = 'spoon_img'></img>
                <h1>Subscribe to Our Newsletter</h1>
                <p>And never miss latest Updates!</p>
            </div>
            <div className = 'newsletter__email'>
                <input placeholder = 'Email Address' value = {currentInput} onChange = {(e) => setCurrentInput(e.target.value)}></input>
                <button type = 'button'>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;