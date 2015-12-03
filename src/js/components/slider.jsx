var Slider = React.createClass({
  render: function () {  
       var imgSlider = this.props.imgSlider.map(function(category, key) {
      return (
                <div className="slider-img" ref={(ref) => this.myTextInput = ref}  key={key}>kjhkjh
                    <div className="slider-img__big-img big-img">
                    <img className="big-img__positioner" src={category.img}/>
                </div>
                    <div className="slider-img__min-img min-img">
                        <div className="min-img__arrow min-img__arrow-left" onclick="sliderObj.leftSlide();"></div>
                            <img className="min-img--style" src={category.minImg1}/>
                            <img className="min-img--style" src={category.minImg2}/>
                            <img className="min-img--style" src={category.minImg3}/>
                            <img className="min-img--style" src={category.minImg4}/> 
                            <img className="min-img--style" src={category.minImg5}/>
                        <div className="min-img__arrow min-img__arrow-right" onclick="sliderObj.rightSlide();"></div>
                    </div>
                </div> 
                );
              });
        return (
              <div className="product-description__slider-img">
                {imgSlider}
              </div>
    );
  }

})



 