import React from 'react';
import './intro.css';
import {meal} from '../../constants';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

const Intro = () => {
    const vidRef = React.useRef();
    const [playVideo, setPlayVideo] = React.useState(false);

    return (
        <div className = 'intro'>
            <video src = {meal} ref = {vidRef} type = 'video/mp4' loop controls = {false} muted></video>
            <div className = 'intro__overlay' onClick = {() => {setPlayVideo(prevplayVideo => !prevplayVideo); if (playVideo) {vidRef.current.pause();} else {vidRef.current.play();}}}>
                { playVideo ? (<BsPauseFill fontSize = {40} color = '#fff' cursor = 'pointer'></BsPauseFill>) : (<BsFillPlayFill fontSize = {40} color = '#fff' cursor = 'pointer'></BsFillPlayFill>) }
            </div>
        </div>
    );
}

export default Intro;