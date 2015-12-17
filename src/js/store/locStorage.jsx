import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'
import {api} from 'app.jsx'
var $ = require('jquery');

$(document).ready( function () {
	$('#page').on('click', '#addCart',function () {
		if (!$('.layout-description__header').text()) {
		} else {
			var description = [];
			description.push ($('.big-img__positioner').attr('src'));
			description.push ($('.layout-description__header').text());
			description.push ($('#quantiti').val());
			description.push ($('.price').text());
			localStorage[$('.layout-description__header').text()] = description.join(';');
		}			
	});
});

var CartItem = {
	getCartItem: function () {
		var arr = [];		
		for (var key in localStorage) {			
			arr.push(localStorage.getItem(key));			
		}
		Dispatcher.emit('update-CartItem', arr);
	}
}
Dispatcher.on('get-CartItem', CartItem.getCartItem);
export {CartItem}