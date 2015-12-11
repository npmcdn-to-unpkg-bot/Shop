import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {HomePage} from 'homePage.jsx'
import {Category} from 'category.jsx'
import {Description} from 'DescriptionPage.jsx'
import {Cart} from 'cart.jsx'
import {Pay} from 'Pay.jsx'
import {Addres} from 'addres.jsx'
<<<<<<< HEAD
import {Finish} from 'Finish.jsx'
=======
>>>>>>> 8abd54b626e38a3097932efa113ea0ac0bf5ae12

var app = React.createClass({
	render: function () {
    	return (
    	<Router>
        	<Route path="/" component={HomePage} /> 
			<Route path="/Categories/:category" component={Category} />
           	<Route path="/Categories/:category/:id" component={Description} />		
			<Route path="/Cart" component={Cart} />
<<<<<<< HEAD
			<Route path="/Cart/Addres" component={Addres} />
			<Route path="/Cart/Addres/Pay" component={Pay} />
			<Route path="/Cart/Addres/Pay/Finish" component={Finish} />

=======
			<Route path="/Cart/Addres" component={Addres} />						
>>>>>>> 8abd54b626e38a3097932efa113ea0ac0bf5ae12
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
