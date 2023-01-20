import React from 'react';
import './laurels.css';
import {images} from '../../constants';
import Laurel from '../../components/Laurel/Laurel';

const Laurels = () => {
    return (
        <div className = 'laurels'>
            <div className = 'laurels__logo'>
                <img src = {images.logo} alt = 'laurels_logo'></img>
            </div>
            <div className = 'laurels__content'>
                <div className = 'laurels__content-heading'>
                    <h3>Awards & recognition</h3>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <h1>Our Laurels</h1>
                </div>
                <div className = 'laurels__content-container'>
                        <Laurel image = {images.award02} title = 'Bib Gourmond' text = 'Lorem ipsum dolor sit amet, consectetur.'></Laurel>
                        <Laurel image = {images.award01} title = 'Rising Star' text = 'Lorem ipsum dolor sit amet, consectetur.'></Laurel>
                        <Laurel image = {images.award05} title = 'AA Hospitality ' text = 'Lorem ipsum dolor sit amet, consectetur.'></Laurel>
                        <Laurel image = {images.award03} title = 'Outstanding Chef' text = 'Lorem ipsum dolor sit amet, consectetur.'></Laurel>
                </div>
            </div>          
            <div className = 'laurels__image'>
                <img src = {images.laurels} alt = 'laurels_img'></img>
            </div>
        </div>
    );
}

export default Laurels;