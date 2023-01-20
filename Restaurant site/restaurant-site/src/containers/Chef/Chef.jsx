import React from 'react';
import './chef.css';
import {images} from '../../constants';

const Chef = () => {
    return (
        <div className = 'chef'>
            <div className = 'chef__image'>
                <img src = {images.chef} alt = 'chef_img'></img>
            </div>
            <div className = 'chef__content'>
                <div className = 'chef__content-heading'>
                    <h3>Chef’s Word</h3>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <h1>What we believe in</h1>
                </div>
                <div className = 'chef__content-quote'>
                    <div className = 'chef__content-quote_A'>
                        <img src = {images.quote} alt = 'quote_img'></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                    </div>
                    <div className = 'chef__content-quote_B'>
                        <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                    </div>
                </div>
                <div className = 'chef__content-name'>
                    <h2>Kevin Luo</h2>
                    <p>Chef & Founder</p>
                </div>
                <div className = 'chef__content-sign'>
                    <img src = {images.sign} alt = 'sign_img'></img>
                </div>
            </div>
        </div>
    );
}

export default Chef;