import { useState } from 'react'
import playButton from "/play_button.svg"
import './App.css'
import Header from "./Components/Header.jsx";
import PlayButton from "./Components/PlayButton.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <PlayButton imageSource={playButton}></PlayButton>
    </>
  )
}

export default App
