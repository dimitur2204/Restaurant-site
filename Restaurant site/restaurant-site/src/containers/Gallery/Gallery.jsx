import React from 'react';
import './gallery.css';
import {images} from '../../constants';
import { FaInstagram } from 'react-icons/fa';

const Gallery = () => {
    const [hover, setHover] = React.useState(false);

    return (
        <div className = 'gallery'>
            <div className = 'gallery__content'>
                <h3>Instagram</h3>
                <img src = {images.spoon} alt = 'spoon_img'></img>
                <h1>Photo Gallery</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type = 'button'>View More</button>
            </div>
            <div className = 'gallery__container'>
                <div className = 'gallery__container-image1'>
                    <img src = {images.gallery01} alt = 'gallery_img'></img>
                </div>
                <div className = 'gallery__container-image2'>
                    <div></div>
                    <FaInstagram onMouseEnter = {() => setHover(true)} onMouseLeave = {() => setHover(false)} style = {{ color: hover ? '#0080FE' : 'fff' }} className = 'gallery__container-image2_insta'></FaInstagram>
                    <img src = {images.gallery02} alt = 'gallery_img'></img>
                </div>
                <div className = 'gallery__container-image3'>
                    <img src = {images.gallery03} alt = 'gallery_img'></img>
                </div>
                <div className = 'gallery__container-image4'>
                    <img src = {images.gallery04} alt = 'gallery_img'></img>
                </div>
            </div>
        </div>
    );
}

export default Gallery;