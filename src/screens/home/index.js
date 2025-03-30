import React, { useState } from 'react';
import apiClient from "../../spotify";
import "./home.css";

export default function Home() {
    // list of words for the users to choose from
    const wordlist = [
        "Happy", "Sad", "Okay", "Excited", "Stressed", "Bored", "Tired", "Peaceful", "Lonely", 
        "Frustrated", "Crazy", "Wild", "Fun", "Busy", "Amazing", "Quiet", "Draining", 
        "Gloomy", "Weird", "Scary", "Productive", "Relaxing", "Challenging"
    ]

    const [selected_words, set_selected_words] = useState([]); // tracks the words selected by the user

    // function to handle the selection and unselection of words
    const handle_selected_words = (word) => {
    // if the word is already selected then remove it
    if (selected_words.includes(word)) {
      set_selected_words(selected_words.filter((w) => w !== word));
    } 
    // if less than 3 words are selected then add the new word
    else if (selected_words.length < 3) {
      set_selected_words([...selected_words, word]);
    }
    }

    // const fetchSongs = async () => {
    //     if (selected_words.length == 0) {
    //         alert("Please select at least one word to get song recommendations.");
    //         return;
    //     }

    //     try {
    //         const response = await apiClient.get("")
    //     }

    return (
    <div className = "container">
        <div className = "text">
            <p className ="TopP">Tell us about your day in a few words....</p>
            <p className = "BottomP">(Choose <strong>3</strong> maximum)</p>
            {/*//set words here */}
            <div className="word-list">
                    {wordlist.map((word) => (
                        <button
                            key={word}
                            className={`word-button ${selected_words.includes(word) ? 'selected' : ''}`}
                            onClick={() => handle_selected_words(word)}
                        >
                            {word}
                        </button>
                    ))}
                </div>
        </div>
        <div className = "recSongs">
            <p>Rest of playlist here:</p>
        </div>
    </div>
    );
    
}
