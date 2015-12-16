import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'
var categoriesHome = {
    category: [
        { category: 'Motherboard', href: '/Categories/Motherboard'},
        { category: 'CPU', href: '/Categories/CPU'},
        { category: 'RAM', href: '/Categories/RAM'},
        { category: 'VideoAdapter', href: '/Categories/VideoAdapter'},
        { category: 'HDD', href: '/Categories/HDD'},
        { category: 'PowerSource', href: '/Categories/PowerSource'},
        { category: 'Cooling', href: '/Categories/Cooling'}
    ],
    getCategories: function(){
        Dispatcher.emit('update-categories',  categoriesHome.category);
    } 
}
Dispatcher.on('get-categories', categoriesHome.getCategories); 
export {categoriesHome}
