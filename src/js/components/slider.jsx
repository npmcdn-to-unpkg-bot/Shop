import {SliderTemplate} from 'sliderTemplate.jsx'
var Slider = React.createClass({
    getDefaultProps: function () {
        return {
            imgSlider: [
                {
                
                }
            ],
        }  
    },
    render: function () {
    	return (
    	<div className="description__slider">
            <SliderTemplate imgSlider={this.props.imgSlider} />
    	</div>
    );
  }
})         
export {Slider} 