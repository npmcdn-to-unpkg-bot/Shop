var Header = React.createClass ({
	render: function () {
		return (
			<header className="page__header header">
        		<a className="header__elements header__elements--logo" href="/">
        		</a>
        		<a className="header__elements header__elements--authorization header-elements__authorization" href="#openModal">
            		<span className="header-elements__authorization--img">
					</span>
            		<span className="header-elements__text--hidden">
						Profile
					</span>
        		</a>
        		<a className="header__elements header__elements--basket header-elements__basket" href="CartPage.html">
            		<span className="header-elements__basket--img">
					</span>
            		<span className="header-elements__text--hidden">
						Cart
					</span>
        		</a>
        		<input className="header__elements header__elements--search" type="search" placeholder="Search"/>
    		</header>
		);
	}
})
