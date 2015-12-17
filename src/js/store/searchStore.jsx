import { Dispatcher} from 'Dispatcher.jsx';
import {api} from 'app.jsx';
import {searchAction} from 'searchAction.jsx';
var $ = require('jquery');

var searchStore = {
    search: function(ev){
        $.get(api+ "/search",{value: ev}, function(result){
            var i = result.length;
        for (var k=0; k<i; k++){
            var search = result[k].name
           	var	searchString = ev.trim().toLowerCase();
		if(searchString.length > 0){
			var goods = result.filter(function(b){
                return b.name.toLowerCase().match(searchString);
			})
		} 
        else {goods = []}
        }
           Dispatcher.emit('update-search',  goods)
        }
     
        )}
    }

Dispatcher.on('search', searchStore.search)
export {searchStore}