import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {HomePage} from 'homePage.jsx'
import {Category} from 'category.jsx'
import {Description} from 'DescriptionPage.jsx'
import {Cart} from 'cart.jsx'
import {Pay} from 'Pay.jsx'
import {Addres} from 'addres.jsx'

var app = React.createClass({
	render: function () {
    	return (
    	<Router>
        	<Route path="/" component={HomePage} /> 
			<Route path="/Categories/:category" component={Category} />
           	<Route path="/Categories/:category/:id" component={Description} />		
			<Route path="/Cart" component={Cart} />
			<Route path="/Cart/Addres" component={Addres} />						
    	</Router>
    );
  }
})
window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        React.createElement(app), 
        document.getElementById('page')
    );
});
