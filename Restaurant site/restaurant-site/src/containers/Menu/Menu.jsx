import React from 'react';
import './menu.css';
import {images, data} from '../../constants';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = () => {
    let ListOfWines = data.wines.map((e) => {
        return (
            <MenuItem title = {e.title} price = {e.price} tags = {e.tags}></MenuItem>
        );
    });

    let ListOfCocktails = data.cocktails.map((e) => {
        return (
            <MenuItem title = {e.title} price = {e.price} tags = {e.tags}></MenuItem>
        );
    });

    return (
        <div className = 'menu' id = 'pages'>
            <div className = 'menu__heading'>
                <h3>Menu that fits you palatte</h3>
                <img src = {images.spoon} alt = 'spoon_img'></img>
                <h1>Today’s Special</h1>
            </div>
            <div className = 'menu__container'>
                <div className = 'menu__container-wines'>
                    <h2>Wine & Beer</h2>
                    {ListOfWines}
                </div>
                <img src = {images.menu} alt = 'menu_img'></img>
                <div className = 'menu__container-cocktails'>
                    <h2>Cocktails</h2>
                    {ListOfCocktails}
                </div>
            </div>
            <button type = 'button'>View More</button>
        </div>
    );
}

export default Menu;