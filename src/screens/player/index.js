require('dotenv').config();

import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import AudioPlayer from "../../components/audioPlayer";
import SongRecs from "../../screens/songRecs";
import "./player.css";

export default function Player({ tracks }) {
  
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const spotifyPreviewFinder = require('spotify-preview-finder');
    const audioSrc = "";
    const audioRef = useRef(null);
    
    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]);
    }, [currentIndex, tracks]); 

    return (
        <div className="player-container flex">
            <div className="top-player">
                <AudioPlayer>
                    currentTrack={currentTrack}  
                    currentIndex={currentIndex} 
                    setCurrentIndex={setCurrentIndex}
                    total={tracks} />
                </AudioPlayer>
            </div>
            {/* <div>
                #SOngRecs Section?
            </div> */}
        </div>
    )


    
}