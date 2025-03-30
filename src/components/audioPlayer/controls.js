import React from "react";
import "./controls.css";
import {IconContext} from "react-icons";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

export default function Controls({
    isPlaying, 
    setIsPlaying, 
    handleNext, 
    handlePrev,
}) {
    return (
        <IconContext.Provider value = {{size:"35px", color: "#C4D0E#"}}>
            <div className="control-wrapper flex">
                <div classname="action-btn flex" onClick={handlePrev}>
                    <FaStepBackward />
                </div>
                <div
                    className={
                        isPlaying ? "play-pause-btn flex active": "play pause-btn flex"
                    }
                    onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                </div>
                <div className ="action-btn flex" onClick = {handleNext}>
                    <FaStepForward />
                </div>
            </div>
        </IconContext.Provider>
    );
}