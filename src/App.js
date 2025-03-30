import './App.css';
import React, { useState,useEffect } from 'react'; 
import { setClientToken } from "./spotify";
import Home from './screens/home';
import Login from "./screens/auth/login";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  
// /*
//   const handle_summary_click = () => {
//     window.location.href = "summary.html";
//   };
// */

  return !token ? (
    <Login />
  ) : (
    <div className="App">
      <div class = "topBar">
        <h1 class = "logoTitle">
          <img src="https://github.com/rlhon/CatAPI/blob/main/logo.jpg?raw=true"></img></h1>
        <header className = "head">Mood Music</header>
        <a href = "aboutus.html">About Our Project</a>
      </div>
      <Home />
    </div>
  );
}

export default App;
