import React, { useState } from 'react';
import './App.css';
import audioSource from './source.mp3';

function App() {

    const [playing, setPlaying] = useState(false);

    const play = () => {
        const audio = document.getElementById("playAudio");
        !playing ? audio.play() : audio.pause();
        setPlaying(!playing);
    };

    return (
        <div className={!playing ? "App" : "App App_wow"}>
            <audio id="playAudio">
                <source src={audioSource}/>
                    Your browser does not support the audio element.
            </audio>
            <input className={'Btn'} onClick={play} type="button" value={playing ? '||' : '>'} />
        </div>
    );
}

export default App;
