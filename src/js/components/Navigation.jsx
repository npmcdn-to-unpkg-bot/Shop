import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
	
const ACTIVE ={background: 'aqua'}

var Navigation = React.createClass ({	
	
	getDefaultProps: function () {
    	return {
			nav:[
				{name: 'Motherboard', img: 'mother'},
				{name: 'CPU', img: 'cpu'},
				{name: 'RAM', img: 'ram'},
				{name: 'VideoAdapter', img: 'video'},
				{name: 'HDD', img: 'hdd'},
				{name: 'PowerSource', img: 'power'},
				{name: 'Cooling', img: 'cooling'}
			],
    	}
  	},
	
	render: function () {
    	var nav = this.props.nav.map(function(nav, key) {
			return (
       	  		<Link className="navbar__link" activeStyle = {ACTIVE} to={nav.name} key={key}>
              		<div className={"navbar__img navbar__img--" + nav.img}></div>
            		<span className="caption">{nav.name}</span>
        		</Link>   	
     		);
    	});	
		return (
			<div className="page__menu">
            	<nav className="navbar navbar--style">					
		      		{nav}
            	</nav>
        	</div>		
	  	);
    }
})
export {Navigation}
