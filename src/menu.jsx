import { useState } from 'react'
import './menu.css'

export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu">
                <div className="menu-title">Menu</div>

                <div className='menu-item-container'>
                    <img className="menu-pic" src="./menu-pic1.jpg"></img>
                    <div className="menu-text-container">
                        <div className='menu-title-container'>
                            <div className="menu-item-title">Matcha Cookies</div>
                            <div className='faint-line'></div>
                            <div className="price">$2.50</div>
                        </div>
                        <a className='order-button'>ORDER NOW</a>
                        <div className="item-description">
                            Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}