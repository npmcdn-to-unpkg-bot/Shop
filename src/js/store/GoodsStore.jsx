import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'
import {api} from 'app.jsx'
var $ = require('jquery');

var Goods = {	
	getGoods: function() {
		$.get(api + "/goods", function(result) {
			Dispatcher.emit('update-goods', result);
		});				
	}	
}
Dispatcher.on('get-goods', Goods.getGoods);
export {Goods}