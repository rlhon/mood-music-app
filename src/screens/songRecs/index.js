import React, { useState, useEffect } from 'react';
import "./songRecs.css";

export default function SongRecs({ tracks }) {
    if (tracks == null) {
        console.log("No songs found");
        return <p className = "loading"> Loading songs ...</p>;
    }
    return (
        <div className = "recSongs">
            <p className = "songText">Your playlist:</p>
            <div className = "fullList">
                {tracks?.slice(1).map((track) => (
                    <div className = "trackCard"
                        key = {track.id}
                        onClick={() => {
                            const spotifyURL =`https://open.spotify.com/track/${track.id}`;
                            window.open(spotifyURL, "_blank"); 
                        }}
                         >
                        <div className="trackInfo">  {/* NEW WRAPPER */}
                            <img src={track.album.images[0].url} className = "trackImage" />
                            <p className= "trackName">{track.name}</p>
                            <p className = "trackArtist">{track.artists[0].name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}