import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var Navigation = React.createClass ({
	getDefaultProps: function () {
    	return {
			nav:[
				{name: 'Motherboard', href: '#itemList', img: 'mother'},
				{name: 'CPU', href: '#itemList', img: 'cpu'},
				{name: 'RAM', href: '#itemList', img: 'ram'},
				{name: 'VideoAdapter', href: '#itemList', img: 'video'},
				{name: 'HDD', href: '#itemList', img: 'hdd'},
				{name: 'PowerSource', href: '#itemList', img: 'power'},
				{name: 'Cooling', href: '#itemList', img: 'cooling'}
			],
    	}
  	},
	
	render: function () {
    	var nav = this.props.nav.map(function(nav, key) {
			return (
       	  		<Link className="navbar__link" to="/Motherboard" key={key}>
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