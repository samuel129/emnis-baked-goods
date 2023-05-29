import { useState } from 'react'
import { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import './menu.css'
import Data from "./cookie-data.js"

export default function Menu() {

    const cookies = Data.map(item => {
        return (
            <Zoom delay={300} duration={1500}>
                <div className='menu-item-container' id={item.id}>
                    <img className="menu-pic" src="./menu-pic1.jpg"></img>
                    <div className="menu-text-container">
                        <div className='menu-title-container'>
                            <div className="menu-item-title">{item.name}</div>
                            <div className='faint-line'></div>
                            <div className="price">{item.price}</div>
                        </div>
                        <a className='order-button'>ORDER NOW</a>
                        <div className="item-description">
                            {item.description}
                        </div>
                    </div>
                </div>
            </Zoom>
    )})

    return (
        <div className="menu-container" style={{backgroundImage:`url("cookie-bg.jpg")`}}>
            <div className='dark-film'></div>
            <div className="menu">
                <div className="menu-title">Current Menu</div>
                {cookies}
            </div>
        </div>
)}