import { useState } from 'react'
import HeaderOne from "./header-1.jsx"
import SlidingBg from "./top-sliding-bg.jsx"
import About from "./about.jsx"
import Menu from "./menu.jsx"
import './App.css'

function App() {
  const [dropOpacity, setDropOpacity] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const dropStyle = {
    opacity: dropOpacity
  }

  function load() {
    if (!loaded) {
      console.log("dog")
      setDropOpacity(0);
      setLoaded(true);
    }
  }

  // if (typeof screen.orientation !== 'undefined') {

  // }

  return (
    <div>
      <HeaderOne onClick={load}/>
      <SlidingBg/>
      <Menu/>
      <About />
    </div>
  )
}

export default App
