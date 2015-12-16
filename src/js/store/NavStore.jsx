import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {Dispatcher} from 'Dispatcher.jsx'
var NavCat = {
	nav:[
		{name: 'Motherboard', img: 'mother'},
		{name: 'CPU', img: 'cpu'},
		{name: 'RAM', img: 'ram'},
		{name: 'VideoAdapter', img: 'video'},
		{name: 'HDD', img: 'hdd'},
		{name: 'PowerSource', img: 'power'},
		{name: 'Cooling', img: 'cooling'}
	],
	
	getNav: function () {
		Dispatcher.emit('update-nav', NavCat.nav);
	}
};
Dispatcher.on('get-nav', NavCat.getNav);
export {NavCat}