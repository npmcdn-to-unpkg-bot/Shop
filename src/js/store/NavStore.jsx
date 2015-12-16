import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {Dispatcher} from 'Dispatcher.jsx'
import {api} from 'app.jsx'
var $ = require('jquery');

var NavCat = {
	getNav: function () {
		$.get(api + "/nav", function(result) {
			Dispatcher.emit('update-nav', result);
		});		
	}
};
Dispatcher.on('get-nav', NavCat.getNav);
export {NavCat}