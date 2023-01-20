import React from 'react';
import './navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [toggleLogin, setToggleLogin] = React.useState(false);
    const [toggleBook, setToggleBook] = React.useState(false);
    const [togglePasswordMatchError, setTogglePasswordMatchError] = React.useState(false);
    const [currentInput1, setCurrentInput1] = React.useState('');
    const [currentInput2, setCurrentInput2] = React.useState('');
    const [currentInput3, setCurrentInput3] = React.useState('');
    const [currentInput4, setCurrentInput4] = React.useState('');
    const [currentInput5, setCurrentInput5] = React.useState('');
    const [currentInput6, setCurrentInput6] = React.useState('');
    const [currentInput7, setCurrentInput7] = React.useState('');
    const [currentInput8, setCurrentInput8] = React.useState('');   

    return (
        <nav className = 'navbar'>
            <div className = 'navbar__heading'>
                <h1>Gerícht</h1>
            </div>
            <ul className = 'navbar__links'>
                <li><a href = '#home'>Home</a></li>
                <li><a href = '#pages'>Pages</a></li>
                <li><a href = '#contactus'>Contact Us</a></li>
                <li><a href = '#blog'>Blog</a></li>
                <li><a href = '#landing'>Landing</a></li>
            </ul>
            <div className = 'navbar__loginbook'>
                <a href = '#login' onClick = {() => {setToggleBook(false); setToggleLogin(true)}}>Log in / Registration</a>
                <div className = 'navbar__loginbook-line'></div>
                <a href = '#book' onClick = {() => {setToggleLogin(false); setToggleBook(true)}}>Book Table</a>
            </div>
            <div className = 'navbar__menu'>
                <div className = 'navbar__menu-loginbook'>
                    <a href = '#login' onClick = {() => {setToggleBook(false); setToggleLogin(true)}}>Log in / Registration</a>
                    <div className = 'navbar__loginbook-line'></div>
                    <a href = '#book' onClick = {() => {setToggleLogin(false); setToggleBook(true)}}>Book Table</a>
                </div>
                <GiHamburgerMenu color = '#fff' fontSize = {27} onClick = {() => setToggleMenu(true)}></GiHamburgerMenu>
                { toggleMenu && (
                    <div className = 'navbar__menu-overlay'>
                        <MdOutlineRestaurantMenu fontSize = {27} className = 'navbar__menu-overlay_close' onClick = {() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
                        <ul className = 'navbar__menu-overlay_links'>
                            <li><a href = '#home' onClick = {() => setToggleMenu(false)}>Home</a></li>
                            <li><a href = '#pages' onClick = {() => setToggleMenu(false)}>Pages</a></li>
                            <li><a href = '#contactus' onClick = {() => setToggleMenu(false)}>Contact Us</a></li>
                            <li><a href = '#blog' onClick = {() => setToggleMenu(false)}>Blog</a></li>
                            <li><a href = '#landing' onClick = {() => setToggleMenu(false)}>Landing</a></li>
                        </ul>
                        <ul className = 'navbar__menu-overlay_loginbook'>
                            <li><a href = '#home' onClick = {() => setToggleMenu(false)}>Home</a></li>
                            <li><a href = '#pages' onClick = {() => setToggleMenu(false)}>Pages</a></li>
                            <li><a href = '#contactus' onClick = {() => setToggleMenu(false)}>Contact Us</a></li>
                            <li><a href = '#blog' onClick = {() => setToggleMenu(false)}>Blog</a></li>
                            <li><a href = '#landing' onClick = {() => setToggleMenu(false)}>Landing</a></li>
                            <li><a href = '#login' onClick = {() => {setToggleMenu(false); setToggleBook(false); setToggleLogin(true)}}>Log in / Registration</a></li>
                            <li><a href = '#book' onClick = {() => {setToggleMenu(false); setToggleLogin(false); setToggleBook(true)}}>Book Table</a></li>
                        </ul>
                    </div> 
                )}               
            </div>
            { toggleLogin && (
                <div className = 'navbar__loginoverlay'>
                    <div className = 'navbar__loginoverlay-login'>
                        <h2>Log in</h2>
                        <input placeholder = 'Enter username' value = {currentInput1} onChange = {(e) => setCurrentInput1(e.target.value)}></input>
                        <input placeholder = 'Enter password' type = 'password' value = {currentInput2} onChange = {(e) => setCurrentInput2(e.target.value)}></input>
                        <button type = 'button'>Log in</button>
                    </div>
                    <div className = 'navbar__loginoverlay-line1'></div>
                    <div className = 'navbar__loginoverlay-line2'></div>
                    <div className = 'navbar__loginoverlay-register'>
                        <h2>Register</h2>
                        <input placeholder = 'Enter username' value = {currentInput3} onChange = {(e) => setCurrentInput3(e.target.value)}></input>
                        <input placeholder = 'Enter password' type = 'password' value = {currentInput4} onChange = {(e) => setCurrentInput4(e.target.value)}></input>
                        <input placeholder = 'Confirm password' type = 'password' value = {currentInput5} onChange = {(e) => setCurrentInput5(e.target.value)}></input>
                        { togglePasswordMatchError && (
                            <p>Passwords don't match!</p>
                        )}                        
                        <button type = 'button' onClick = {() => {currentInput4 !== currentInput5 ? (setTogglePasswordMatchError(true)) : (setTogglePasswordMatchError(false))}}>Register</button>
                    </div>
                    <MdOutlineRestaurantMenu fontSize = {27} color = '#DCCA87' onClick = {() => setToggleLogin(false)} className = 'navbar__overlay-close'></MdOutlineRestaurantMenu>
                </div>
            )}
            { toggleBook && (
                <div className = 'navbar__bookoverlay'>
                    <h2>Book table</h2>
                    <input placeholder = 'Enter First  Name' value = {currentInput6} onChange = {(e) => setCurrentInput6(e.target.value)}></input>
                    <input placeholder = 'Enter Last Name' value = {currentInput7} onChange = {(e) => setCurrentInput7(e.target.value)}></input>
                    <input placeholder = 'Enter Phone Number' type = 'tel' value = {currentInput8} onChange = {(e) => setCurrentInput8(e.target.value)}></input>
                    <button type = 'button'>Book</button>
                    <MdOutlineRestaurantMenu fontSize = {27} color = '#DCCA87' onClick = {() => setToggleBook(false)} className = 'navbar__overlay-close'></MdOutlineRestaurantMenu>
                </div>
            )}      
        </nav>
    );
}

export default Navbar;