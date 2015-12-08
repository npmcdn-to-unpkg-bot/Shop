import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var CategoryMotherboard = React.createClass({
  	
	getInitialState: function () {
		return {
			secondsElapsed: 0,
        	category: this.props.params.category,
        };
  	},
    
	getItems: function(category) {
        if (category =='Motherboard')  {
          return this.props.motherboard;
      }      
        if (category =='CPU')  {
          return this.props.CPU;
      }
    },
	
	getDefaultProps: function () {
		return {
			motherboard: [
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S2', img:'unit-value__img-img1', price:'$ 555', link:'GIGABYTE-GA-78LMT-S2'}, 
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S3', img:'unit-value__img-img2', price:'$ 655', link:'GIGABYTE-GA-78LMT-S3'}, 
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S4', img:'unit-value__img-img3', price:'$ 700', link:'GIGABYTE-GA-78LMT-S4'}, 
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S5', img:'unit-value__img-img4', price:'$ 900', link:'GIGABYTE-GA-78LMT-S5'}     
		  	],
            CPU: [
				{category: 'CPU', name:'CPUCPUCPUCPUCPCPUCPU', img:'unit-value__img-img1', price:'$ 234234', link:'GIGABYTE-GA-78LMT-S2'}, 
				{category: 'CPU', name:'GIGABYTE-GA-78LMT-S3', img:'unit-value__img-img2', price:'$ 6035', link:'GIGABYTE-GA-78LMT-S3'}, 
				{category: 'CPU', name:'GIGABYTE-GA-78LMT-S4', img:'unit-value__img-img3', price:'$ 7504', link:'GIGABYTE-GA-78LMT-S4'}, 
				{category: 'CPU', name:'GIGABYTE-GA-78LMT-S5', img:'unit-value__img-img4', price:'$ 9540', link:'GIGABYTE-GA-78LMT-S5'}     
		  	],

		}
	},
	
	tick: function () {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});	
	},
	
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
	},
	
	componentWillUnmount: function () {
		clearInterval(this.interval);
	},

	render: function () {
		return (
			<div className="page">
			
				<div className="page__header">
					<Header />
				</div>
			
                <div className="page__content">
			
					<Navigation />

					<article className="goods goods--style">      
						<div className="goods__view">
							<Link className="viewmode" to={this.state.category} >
								List View
							</Link>
						</div>          
						<ItemsList items={this.getItems(this.state.category)} />
						<div>
							Seconds Elapsed: {Math.floor((this.state.secondsElapsed/3600)%24) + 'h ' + Math.floor((this.state.secondsElapsed/60)%60) + 'm ' + this.state.secondsElapsed%60 + 'sec'}
						</div>
					</article>
                </div>
											
                <div className="page__footer">
				    <Footer />
                </div>
											
			</div>		
		);
	}
})