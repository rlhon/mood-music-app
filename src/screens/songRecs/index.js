import React, { useState, useEffect } from 'react';
import APIKit from "../../spotify";
import "./songRecs.css";

export default function songRecs() {
    const[playlists, setPlaylists] = useState(null);

    useEffect(() => {
        APIKit.get()
    })
}