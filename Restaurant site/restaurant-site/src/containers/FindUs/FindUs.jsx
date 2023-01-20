import React from 'react';
import './findus.css';
import {images} from '../../constants';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

const FindUs = () => {
    return (
        <div className = 'findus' id = 'landing'> 
            <div className = 'findus__bg'>
                <img src = {images.bg} alt = 'background'></img>
            </div>
            <div className = 'findus__container'>
                <div className = 'findus__container-content'>                
                    <div className = 'findus__container-content_heading'>
                        <h3>Contact</h3>
                        <img src = {images.spoon} alt = 'spoon_img'></img>
                        <h1>Find Us</h1>
                        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    </div>
                    <div className = 'findus__container-content_open'>
                        <h3>Opening Hours</h3>
                        <p>Mon - Fri: 10:00 am - 02:00 am</p>
                        <p>Sat - Sun: 10:00 am - 03:00 am</p>
                        <button type = 'button'>Visit Us</button>
                    </div>          
                </div>
                <div className = 'findus__container-image'>
                    <img src = {images.findus} alt = 'findus_img'></img>
                </div>
            </div>            
            <div className = 'findus__newsletter'>
                <NewsLetter></NewsLetter>
            </div>         
        </div>
    );
}

export default FindUs;