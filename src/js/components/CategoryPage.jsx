import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var CategoryPage = React.createClass({
  	getInitialState: function () {
		return {secondsElapsed: 0};
  	},
	
	getDefaultProps: function () {
		return {
			items: [
				{name:'GIGABYTE-GA-78LMT-S2', img:'elementspagelink__img--img1', price:'$ 555', link:'Motherboard/GIGABYTE-GA-78LMT-S2'}, 
				{name:'GIGABYTE-GA-78LMT-S3', img:'elementspagelink__img--img2', price:'$ 655', link:'GIGABYTE-GA-78LMT-S2'}, 
				{name:'GIGABYTE-GA-78LMT-S4', img:'elementspagelink__img--img3', price:'$ 700', link:'GIGABYTE-GA-78LMT-S2'}, 
				{name:'GIGABYTE-GA-78LMT-S5', img:'elementspagelink__img--img4', price:'$ 900', link:'GIGABYTE-GA-78LMT-S2'}     
		  	],
			nav:[
				{name: 'Motherboard', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'mother'},
				{name: 'CPU', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'cpu'},
				{name: 'RAM', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'ram'},
				{name: 'VideoAdapter', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'video'},
				{name: 'HDD', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'hdd'},
				{name: 'PowerSource', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'power'},
				{name: 'Cooling', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'cooling'}
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
			<div className="newv__page">	
				<div className="page__header">
					<Header />
				</div>

					<Navigation />

					<article className="newv__elementspage newv__elementspage--style">        
						<div className="newv__viewmode">
							<Link className="newv__elementspagelink" >
							List View
							</Link>
						</div>          
						<ItemsList items={this.props.items} />
						<div>
							Seconds Elapsed: {Math.floor((this.state.secondsElapsed/3600)%24) + 'h ' + Math.floor((this.state.secondsElapsed/60)%60) + 'm ' + this.state.secondsElapsed%60 + 'sec'}
						</div>
					</article>		
				<Footer />
			</div>		
		);
	}
})