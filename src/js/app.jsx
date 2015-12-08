import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {HomePage} from 'homePage.jsx'
import {Category} from 'category.jsx'
import {Description} from 'DescriptionPage.jsx'

var app = React.createClass({
	render: function () {
    	return (
    	<Router>
        	<Route path="/" component={HomePage} /> 
            <Route path="/:category" component={Category} />
            <Route path="/:category/:id" component={Description} />
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
