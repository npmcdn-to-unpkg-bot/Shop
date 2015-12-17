import React from 'react';
import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router';
import {Dispatcher} from 'Dispatcher.jsx';
import {searchStore} from 'searchStore.jsx';
import {SearchAction} from 'searchAction.jsx';
var Search = React.createClass({
    getInitialState: function(){
		return {goods: []}
	},
    componentDidMount: function(){
        Dispatcher.on('update-search', this.update);
    },
    componentWillUnmount: function(){
        Dispatcher.off('update-search', this.update);
    },
    update: function(result){
        this.setState({goods: result})
    },
	SearchChange: function(value){
        SearchAction.searchGoods(value.target.value);

	},
    render: function () {
        return (
            <div className="header-element__search">
                <input className="header__element header__element--search" type="search" placeholder="Search" value={this.state.value} onChange={this.SearchChange} />
                <ul  className='resultSearch'>
                    { this.state.goods.map(function(goods, key){return <li className='searchLink' key={key}> 
                        <Link  to={goods.link}>{goods.name}</Link>
                            </li> 
			         })}
                </ul>
            </div>

        );
  }
})

export {Search};
	