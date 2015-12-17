import {Search} from 'Search.jsx';
import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router';
import React from 'react';
import {Dispatcher} from 'Dispatcher.jsx'	;
var Header = React.createClass ({
	render: function () {
		return (
			<header className="header">   
                <a className="header__element header__element--logo" href="/">
                </a>
                <a className="header__element header__element--authorization ">
                    <span className="header-element__authorization--img">
                    </span>
                    <span className="header-element__text--hidden">
                        Profile
                    </span>
                </a>
                <a className="header__element header__element--basket " href="CartPage.html">
                    <span className="header-element__basket--img">
                    </span>
                    <span className="header-element__text--hidden">
                        Cart
                    </span>
                </a>
                <Search />
    		</header>
		);
	}
})
export {Header}
