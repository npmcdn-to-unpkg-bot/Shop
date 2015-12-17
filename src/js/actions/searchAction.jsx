import {Dispatcher} from 'Dispatcher.jsx';
var SearchAction = {
  searchGoods: function(value) {
    Dispatcher.emit('search',
      value);
  },
}
export {SearchAction};