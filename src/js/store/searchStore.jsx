import { Dispatcher} from 'Dispatcher.jsx';
import {api} from 'app.jsx';
import {searchAction} from 'searchAction.jsx';
var $ = require('jquery');

var searchStore = {
    search: function(ev){
        $.get(api+ "/search",{value: ev}, function(result){
           
           Dispatcher.emit('update-search',ev,  result)
        }
     
        )}
    }

Dispatcher.on('search', searchStore.search)
export {searchStore}