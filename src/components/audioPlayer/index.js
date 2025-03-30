// import React, {useState, useRef, useEffect } from "react";
// import "./audioPlayer.css";
// import Controls from "./controls";
// import MusicPlayerProgress from "./progressBar";
// import spotifyPreviewFinder from 'spotify-preview-finder';

// export default function AudioPlayer({
//     currentTrack,
//     currentIndex,
//     setCurrentIndex,
//     total,
// }) {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [currentTime, setCurrentTime] = useState(0);

//     var audioSource = "";
    
//     async function GetURI() {
//         try {
//           // Get preview URLs for a song (limit is optional, default is 5)
//           const result = await spotifyPreviewFinder(total[currentIndex]?.name, 1);
          
//           if (result.success) {
//             result.results.forEach(song => {
//               console.log(`\nSong: ${song.name}`);
//               console.log(`Spotify URL: ${song.spotifyUrl}`);
//               console.log('Preview URLs:');
//               audioSource = `${song.spotifyURL}`;
//             });
//           } else {
//             console.error('Error:', result.error);
//           }
//         } catch (error) {
//           console.error('Error:', error.message);
//         }
//     }

//     GetURI();
    
//     const audioRef = useRef(new Audio(audioSource));

//     const intervalRef = useRef();
//     const isReady = useRef(false);

//     const {duration } = audioRef.current;

//     const currentPerc = duration ? (currentTime /duration) * 100 : 0;

//     const startTimer = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = setInterval(() => {
//             if(audioRef.current.ended) {
//                 handleNext();
//             } else {
//                 setCurrentTime(audioRef.current.currentTime);
//             }
//         }, [1000]);
//     };

//     useEffect(() => {
//         if (audioRef.current.src) {
//             if (isPlaying) {
//                 audioRef.current.play();
//                 startTimer();
//             } else {
//                 clearInterval(intervalRef.current);
//                 audioRef.current.pause();
//             }
//         } else {
//             if (isPlaying) {
//                 audioRef.current = new Audio(audioSource);
//                 audioRef.current.play();
//                 startTimer();
//             } else {
//                 clearInterval(intervalRef.current);
//                 audioRef.current.pause();
//             }
//         }
//     }, [isPlaying]);

//     useEffect(() => {
//         audioRef.current.pause();
//         audioRef.current = new Audio(audioSource);
        
//         setCurrentTime(audioRef.current.currentTime);

//         if (isReady.current) {
//             audioRef.current.play();
//             setIsPlaying(true);
//             startTimer();
//         } else {
//             isReady.current = true;
//         }
//     }, [currentIndex]);

//     useEffect(() => {
//         return () => {
//             audioRef.current.pause();
//             clearInterval(intervalRef.current);
//         }
//     }, []);

//     const handleNext = () => {
//         if (currentIndex < total.length -1) {
//             setCurrentIndex(currentIndex + 1);
//         } else {
//             setCurrentIndex(0);
//         }
//     }

//     const handlePrev = () => {
//         if (currentIndex -1 <0) setCurrentIndex (total.length -1);
//         else setCurrentIndex(currentIndex - 1);
//     };

//     const addZero = (n) => {
//         return n > 9 ? "" + n : "0" + n;
//       };

//     return (
//         <div className="player-body flex">
//           <div className="player-top-body">
//             {/* <ProgressCircle
//               percentage={currentPercentage}
//               isPlaying={true}
//               image={currentTrack?.album?.images[0]?.url}
//               size={300}
//               color="#C96850"
//             /> */}
            
//           </div>
//           <div className="player-bottom-body flex">
//             <p className="song-title">{currentTrack?.name}</p>
//             <p className="song-artist">{currentTrack.artists[0].name}</p>
//             <div className="player-right-bottom flex">
//               <div className="song-duration flex">
//                 <p className="duration">0:{addZero(Math.round(currentTime))}</p>
//                 <MusicPlayerProgress
//                 percentage={currentPerc}
//                 color = "#C96850"
//                 />
//                 {/* <WaveAnimation isPlaying={isPlaying} /> */}
//                 <p className="duration">0:30</p>
//               </div>
//               <Controls
//                 isPlaying={isPlaying}
//                 setIsPlaying={setIsPlaying}
//                 handleNext={handleNext}
//                 handlePrev={handlePrev}
//                 total={total}
//               />
//             </div>
//           </div>
//         </div>
//       );

// }