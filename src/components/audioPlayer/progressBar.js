import React from "react";
import "./progressBar.css";

const ProgressBar = ({ percentage, color, height ="10px", width = "100%"}) => {
    return (
        <div className="progress-bar-container" style = {{ width }}>
            <div
                className ="progress-bar"
                style = {{
                    width: `${percentage}%`,
                    backgroundColor: color, 
                    height: height,
                }}
            />   
        </div> 
    );
};

export default function MusicPlayerProgress({
    percentage, 
    isPlaying, 
    size,
    color, 
    image,
         
}) {
    return (
        <div className = "progess-bar-line">
            <ProgressBar
                percentage = {percentage}
                color = {color} />
        </div>
    )
}