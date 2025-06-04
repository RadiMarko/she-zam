import {useEffect, useState} from 'react'
import playButton from "/play_button.svg"
import pauseButton from "/pause_button.svg"
import './App.css'
import Header from "./Components/Header.jsx";
import PlayButton from "./Components/PlayButton.jsx";

function App() {
    
  const [samples, setSamples] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
    
    
  // Fetching json music paths (in public)
  useEffect(() => {
      fetch("/music.json")
          .then((res) => res.json())
          .then(setSamples)
  }, [])
    
  // Function for randomly picking a song and playing it, and also toggling isPlaying state
  function getRandomSong() {
      const randomIndex = Math.floor(Math.random() * samples.length);
      const songToGuess = new Audio(samples[randomIndex].path)
      songToGuess.play();
      setIsPlaying(prevIsPlaying => !prevIsPlaying)
      return songToGuess;
  }

  return (
    <>
      <Header></Header>
      <PlayButton imageSource={isPlaying ? pauseButton : playButton} playSong={getRandomSong}></PlayButton>
    </>
  )
}

export default App
