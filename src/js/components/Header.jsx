var Header = React.createClass ({
	render: function () {
		return (
			<header className="page__header all__header">
        		<a className="all__header__elements all__header__elements--logo" href="/">
        		</a>
        		<a className="all__header__elements all__header__elements--authorization all__header-elements__authorization" href="#openModal">
            		<span className="all__header-elements__authorization--img">
					</span>
            		<span className="all__header-elements__text--hidden">
						Profile
					</span>
        		</a>
        		<a className="all__header__elements all__header__elements--basket all__header-elements__basket" href="CartPage.html">
            		<span className="all__header-elements__basket--img">
					</span>
            		<span className="all__header-elements__text--hidden">
						Cart
					</span>
        		</a>
        		<input className="all__header__elements all__header__elements--search" type="search" placeholder="Search"/>
    		</header>
		);
	}
})
