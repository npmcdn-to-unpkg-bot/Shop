import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
	
window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        React.createElement(DescriptionPage), 
        document.getElementById('page')
    );
});