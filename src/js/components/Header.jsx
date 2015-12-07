var Header = React.createClass ({
	render: function () {
		return (
			<header className="header">   
                <a className="header__element header__element--logo" href="/">
                </a>
                <a className="header__element header__element--authorization " href="#openModal">
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
                <input className="header__element header__element--search" type="search" placeholder="Search"/>
    		</header>
		);
	}
})
