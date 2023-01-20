import React from 'react';
import './header.css';
import {images} from '../../constants';

const Header = () => {
    return (
        <div className = 'header' id = 'home'>
            <div className = 'header__container'>
                <div className = 'header__container-hashtags'>
                    <p>#Gericht</p>
                    <p>#Bar</p>
                </div>
                <div className = 'header__container-content'>
                    <h5>Chase the new Flavour</h5>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <h1>The key to Fine dining</h1>
                    <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <button type = 'button'>Explore Menu</button>
                </div>
                <div className = 'header__container-image'>
                    <img src = {images.welcome} alt = 'welcome'></img>
                </div>
            </div>
        </div>
    );
}

export default Header;