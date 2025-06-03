import {useEffect, useState} from 'react'
import playButton from "/play_button.svg"
import pauseButton from "/pause_button.svg"
import './App.css'
import Header from "./Components/Header.jsx";
import PlayButton from "./Components/PlayButton.jsx";

function App() {
  const [samples, setSamples] = useState([])
    
  useEffect(() => {
      fetch("/music.json")
          .then((res) => res.json())
          .then(setSamples)
  }, [])
    
  function getRandomSong() {
      const randomIndex = Math.floor(Math.random() * samples.length);
      const songToGuess = new Audio(samples[randomIndex].path)
      return songToGuess;
  }
  
  setTimeout(() => {
      console.log(getRandomSong())
  }, 1000)

  return (
    <>
      <Header></Header>
      <PlayButton imageSource={playButton}></PlayButton>
    </>
  )
}

export default App
