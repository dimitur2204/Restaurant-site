import React from 'react';
import './aboutus.css';
import {images} from '../../constants';

const AboutUs = () => {
    return (
        <div className = 'aboutus' id = 'blog'>
            <div className = 'aboutus__g'>
                <img src = {images.G} alt = 'g'></img>
            </div>
            <div className = 'aboutus__content'>
                <div className = 'aboutus__content-left'>
                    <h1>About Us</h1>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button type = 'button'>Know More</button>
                </div>
                <div className = 'aboutus__content-image'>
                    <img src = {images.knife} alt = 'knife_img'></img>
                </div>
                <div className = 'aboutus__content-right'>
                    <h1>Our History</h1>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    <button type = 'button'>Know More</button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;