import React from 'react';
import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router';
import {Dispatcher} from 'Dispatcher.jsx';
import {searchStore} from 'searchStore.jsx';
import {SearchAction} from 'searchAction.jsx';
var Search = React.createClass({
    getInitialState: function(){
		return { 
            goods: []
        };
	},
    componentDidMount: function(){
        Dispatcher.on('update-search', this.update);
    },
    componentWillUnmount: function(){
        Dispatcher.off('update-search', this.update);
    },
    update: function(ev, result){
        var i = result.length;
        for (var k=0; k<i; k++){
            var search = result[k].name
           	var	searchString = ev.trim().toLowerCase();
		if(searchString.length > 0){
			var goods = result.filter(function(l){
                return l.name.toLowerCase().match(searchString);
			})
		} 
        else {
            goods = []}
            }
            this.setState({goods: goods})
    },
	SearchChange: function(value){
        SearchAction.searchGoods(value.target.value);
		this.setState({goods: value});
	},
    render: function () {
        return (
            <div className="header-element__search">
                <input id="search" className="header__element header__element--search" type="search" placeholder="Search" value={this.state.value} onChange={this.SearchChange}/>
                <ul className='resultSearch'>
                    { this.state.goods.map(function(goods, key){
					return <li className='searchLink' key={key}> 
                        <Link to={goods.link} className="item__link">{goods.name}</Link>
                            </li> 
			         })}
                </ul>
            </div>

        );
  }
})

export {Search};
	