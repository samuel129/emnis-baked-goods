import { useState } from 'react'
import Slider from "react-slick"
import './top-sliding-bg.css'

export default function SlidingBg() {
    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="right-arrow"
                onClick={onClick}
                >
                <img src="./rightArrow.png" alt="rightArrow"/>
            </div>
        );
    }
    
    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="left-arrow"
                onClick={onClick}
                >
                <img src="./leftArrow.png" alt="leftArrow"/>
            </div>
        );
    }

    const settings = {
		className: "shows-slider",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
        fade: true,
        nextArrow: <NextArrow/>,
		prevArrow: <PrevArrow/>,
	};

    return (
        <div className="slider-case">
            <Slider className="slider" {...settings}>
                <img src="top-bg3.jpg"></img>
                <img src="top-bg1.png"></img>
                
            </Slider>
            
        </div>
)}