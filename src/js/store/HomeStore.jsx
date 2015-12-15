import {HomePageTemplate} from 'Home.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'
var categoriesHome = {
    category: [
        {name:'GIGABYTE-GA-78LMT-S2', category: 'Motherboard', href: '/Categories/Motherboard'},
        {name:'GIGABYTE-GA-78LMT-S2', category: 'CPU', href: '/Categories/CPU'},
        {name:'GIGABYTE-GA-78LMT-S2', category: 'RAM', href: '/Categories/RAM'},
        {name:'GIGABYTE-GA-78LMT-S2', category: 'VideoAdapter', href: '/Categories/VideoAdapter'},
        {name:'GIGABYTE-GA-78LMT-S2', category: 'HDD', href: '/Categories/HDD'},
        {name:'GIGABYTE-GA-78LMT-S2', category: 'PowerSource', href: '/Categories/PowerSource'},
        {name:'GIGABYTE-GA-78LMT-S2', category: 'Cooling', href: '/Categories/Cooling'}
    ],
    getCategories: function(){
        Dispatcher.emit('update-categories',  categoriesHome.category);
    } 
}

Dispatcher.on('get-categories', categoriesHome.getCategories); 
export {categoriesHome}
