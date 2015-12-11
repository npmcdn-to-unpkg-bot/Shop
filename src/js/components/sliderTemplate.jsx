import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var SliderTemplate = React.createClass({
    render: function () {  
        var slider = this.props.slider.map(function(slider, key) {
            return (
                <div className="slider-img"   key={key}>
                    <div className="slider-img__big-img big-img">
                        <img className="big-img__positioner" src={slider.img}/>
                    </div>
                    <div className="slider-img__min-img min-img">
                        <div className="min-img__arrow min-img__arrow--left" onclick="sliderObj.leftSlide();"></div>
                            <img className="min-img--style" src={slider.minImg1}/>
                            <img className="min-img--style" src={slider.minImg2}/>
                            <img className="min-img--style" src={slider.minImg3}/>
                            <img className="min-img--style" src={slider.minImg4}/> 
                            <img className="min-img--style" src={slider.minImg5}/>
                        <div className="min-img__arrow min-img__arrow--right" onclick="sliderObj.rightSlide();"></div>
                    </div>
                </div> 
            );
        });
            return (
                <div className="slider">
                    {slider}
                </div>
            );
    }

})
export {SliderTemplate}