import React from 'react';
import './footer.css';
import {images} from '../../constants';
import {FaInstagram , FaFacebook, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className = 'footer' id = 'contactus'>
            <div className = 'footer__smallscreen'>
                <div className = 'footer__smallscreen-gericht'>
                    <h1>Gerícht</h1>
                    <span>"The best way to find yourself is to lose yourself in the service of others.”</span>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <div className = 'footer__smallscreen-gericht_icons'>
                        <FaFacebook fontSize = {27} color = '#fff' className = 'footer__gericht-icons_fb'></FaFacebook>
                        <FaTwitter fontSize = {27} color = '#fff' className = 'footer__gericht-icons_t'></FaTwitter>
                        <FaInstagram fontSize = {27} color = '#fff' className = 'footer__gericht-icons_i'></FaInstagram>
                    </div>                    
                </div>
            </div>
            <div className = 'footer__bigscreen'>
                <div className = 'footer__bigscreen-contact'>
                    <h3>Contact Us</h3>
                    <p>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </div>
                <div className = 'footer__bigscreen-gericht'>
                    <h1>Gerícht</h1>
                    <span>"The best way to find yourself is to lose yourself in the service of others.”</span>
                    <img src = {images.spoon} alt = 'spoon_img'></img>
                    <div className = 'footer__bigscreen-gericht_icons'>
                        <FaFacebook fontSize = {27} color = '#fff' className = 'footer__gericht-icons_fb'></FaFacebook>
                        <FaTwitter fontSize = {27} color = '#fff' className = 'footer__gericht-icons_t'></FaTwitter>
                        <FaInstagram fontSize = {27} color = '#fff' className = 'footer__gericht-icons_i'></FaInstagram>
                    </div>
                    <p>2021 Gerícht. All Rights reserved.</p>
                </div>
                <div className = 'footer__bigscreen-hours'>
                    <h3>Working Hours</h3>
                    <p>Monday-Friday:</p>
                    <p>08:00 am -12:00 am</p>
                    <p>Saturday-Sunday:</p>
                    <p>07:00am -11:00 pm</p>
                </div>
            </div> 
            <p className = 'footer__copyright'>2021 Gerícht. All Rights reserved.</p>          
        </div>
    );
}

export default Footer;