import React from 'react';
import './app.css';
import {Navbar} from './components';
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu} from './containers';

const App = () => {
    return (
        <div className = 'app'>
            <Navbar></Navbar>
            <Header></Header>
            <AboutUs></AboutUs>
            <Menu></Menu>
            <Chef></Chef>
            <Intro></Intro>
            <Laurels></Laurels>
            <Gallery></Gallery>
            <FindUs></FindUs>
            <Footer></Footer>
        </div>
    );
}

export default App;