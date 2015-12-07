var Slider = React.createClass({
    getDefaultProps: function () {
        return {
            imgSlider: [
                {
                img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg',
                minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
                minImg2:'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
                minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
                minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
                minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
                }
            ],
        }  
    },
    render: function () {
    	return (
    	<div>
            <SliderTemplate imgSlider={this.props.imgSlider} />
    	</div>
    );
  }
})         




 