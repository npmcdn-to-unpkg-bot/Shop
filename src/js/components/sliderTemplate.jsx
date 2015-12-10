import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var SliderTemplate = React.createClass({
    render: function () {  
        var imgSlider = this.props.imgSlider.map(function(imgSlider, key) {
            return (
                <div className="slider-img"   key={key}>
                    <div className="slider-img__big-img big-img">
                        <img className="big-img__positioner" src={imgSlider.img}/>
                    </div>
                    <div className="slider-img__min-img min-img">
                        <div className="min-img__arrow min-img__arrow--left" onclick="sliderObj.leftSlide();"></div>
                            <img className="min-img--style" src={imgSlider.minImg1}/>
                            <img className="min-img--style" src={imgSlider.minImg2}/>
                            <img className="min-img--style" src={imgSlider.minImg3}/>
                            <img className="min-img--style" src={imgSlider.minImg4}/> 
                            <img className="min-img--style" src={imgSlider.minImg5}/>
                        <div className="min-img__arrow min-img__arrow--right" onclick="sliderObj.rightSlide();"></div>
                    </div>
                </div> 
            );
        });
            return (
                <div className="slider">
                    {imgSlider}
                </div>
            );
    }

})
export {SliderTemplate}