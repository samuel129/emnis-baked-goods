import { useState } from 'react'
import HeaderOne from "./header-1.jsx"
import SlidingBg from "./top-sliding-bg.jsx"
import About from "./about.jsx"
import './App.css'

function App() {
  if (typeof screen.orientation !== 'undefined') {

  }

  return (
    <>
      <HeaderOne/>
      <SlidingBg/>
      <About/>
      <div className="top-film"></div>
    </>
  )
}

export default App
