import { Dispatcher} from 'Dispatcher.jsx';
import {api} from 'app.jsx';
var $ = require('jquery');

var descriptionWare = {
    getDescription: function(){
        $.get(api+ "/description", function(result){
            Dispatcher.emit('update-description',  result);
        })
        
    }
}
Dispatcher.on('get-description', descriptionWare.getDescription)
export {descriptionWare}