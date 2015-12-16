import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'
import {apiPath} from 'app.jsx'
var $ = require('jquery');

var categoriesHome = {
    getCategories: function() {
		$.get(apiPath + "/wares", function(result) {
          Dispatcher.emit('update-categories', result);  
    });
	},
}
Dispatcher.on('get-categories', categoriesHome.getCategories); 
export {categoriesHome}
 