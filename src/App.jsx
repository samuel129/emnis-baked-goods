import { useState } from 'react'
import HeaderOne from "./header-1.jsx"
import SlidingBg from "./top-sliding-bg.jsx"
import './App.css'

function App() {
  if (typeof screen.orientation !== 'undefined') {

  }

  return (
    <>
      <HeaderOne/>
      <SlidingBg/>
      <div className="top-film"></div>
    </>
  )
}

export default App
