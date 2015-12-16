import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router'
import {Dispatcher} from 'Dispatcher.jsx'
import {NavCat} from 'NavStore.jsx'

	
const ACTIVE ={background: 'aqua'}

var Navigation = React.createClass({
	
	getInitialState: function () {
		return {
			nav: []
		}
	},
	
	componentDidMount: function () {		
		Dispatcher.on('update-nav', this.update);
		Dispatcher.emit('get-nav');
	},
	
	componentWillUnmount: function () {
		Dispatcher.off('update-nav', this.update);
	},
	
	update: function (data) {
		this.setState({nav: data});
	},
	
	render: function () {
    	var nav = this.state.nav.map(function(nav, key) {
			return (
       	  		<Link className="navbar__link" activeStyle = {ACTIVE} to={'/Categories/' + nav.name} key={key}>
              		<div className={"navbar__img navbar__img--" + nav.img}></div>
            		<span className="caption">{nav.name}</span>
        		</Link>   	
     		);
    	});	
		return (
			<div className="page__menu">
            	<nav className="navbar navbar--style">		
		      		{nav}
            	</nav>
        	</div>		
	  	);
    }
});
export {Navigation}
