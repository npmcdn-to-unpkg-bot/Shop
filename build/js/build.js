
window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(DescriptionPage), document.getElementById('productDescription'));
});

window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(CategoryPage), document.getElementById('page'));
});
var CategoryPage = React.createClass({
		displayName: 'CategoryPage',

		getDefaultProps: function () {
				return {
						categories: [{ name: 'GIGABYTE-GA-78LMT-S2', img: 'elementspagelink__img--img1', price: '$ 555', link: 'GIGABYTE-GA-78LMT-S2.html' }, { name: 'GIGABYTE-GA-78LMT-S3', img: 'elementspagelink__img--img2', price: '$ 655', link: 'GIGABYTE-GA-78LMT-S2.html' }, { name: 'GIGABYTE-GA-78LMT-S4', img: 'elementspagelink__img--img3', price: '$ 700', link: 'GIGABYTE-GA-78LMT-S2.html' }, { name: 'GIGABYTE-GA-78LMT-S5', img: 'elementspagelink__img--img4', price: '$ 900', link: 'GIGABYTE-GA-78LMT-S2.html' }]
				};
		},

		render: function () {
				return React.createElement(
						'div',
						{ className: 'page' },
						React.createElement(
								'div',
								{ className: 'page__header' },
								React.createElement(Header, null)
						),
						React.createElement(
								'div',
								{ className: 'page__menu' },
								React.createElement(Navigation, null)
						),
						React.createElement(
								'article',
								{ className: 'elementspage elementspage--style' },
								React.createElement(
										'div',
										{ className: 'viewmode' },
										React.createElement(
												'a',
												{ className: 'elementspagelink', href: 'MotherboardList.html' },
												'List View'
										)
								),
								React.createElement(ItemsList, { categories: this.props.categories })
						),
						React.createElement(Footer, null)
				);
		}
});
/*Описание товара*/
var DescriptionList = React.createClass({
    displayName: "DescriptionList",

    render: function () {
        var description = this.props.description.map(function (category, key) {
            return React.createElement(
                "div",
                { className: "product-description", key: key },
                React.createElement(
                    "ol",
                    { className: "product-description__breadcrumb breadcrumb" },
                    React.createElement(
                        "li",
                        { className: "breadcrumb__list" },
                        React.createElement(
                            "a",
                            { href: "index.html" },
                            "Главная"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "breadcrumb__list" },
                        React.createElement(
                            "a",
                            { href: "Motherboard.html" },
                            "Категория"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "breadcrumb__list" },
                        "Товар"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "product-description__slider-img slider-img", id: "slider" },
                    React.createElement(
                        "div",
                        { className: "slider-img__big-img big-img" },
                        React.createElement("img", { className: "big-img__positioner", src: category.img, id: "slider-big-img" })
                    ),
                    React.createElement(
                        "div",
                        { className: "slider-img__min-img min-img", id: "slider-min-img" },
                        React.createElement("div", { className: "min-img__arrow min-img__arrow-left", onclick: "sliderObj.leftSlide();" }),
                        React.createElement("img", { className: "min-img--style", src: category.minImg1 }),
                        React.createElement("img", { className: "min-img--style", src: category.minImg2 }),
                        React.createElement("img", { className: "min-img--style", src: category.minImg3 }),
                        React.createElement("img", { className: "min-img--style", src: category.minImg4 }),
                        React.createElement("img", { className: "min-img--style", src: category.minImg5 }),
                        React.createElement("div", { className: "min-img__arrow min-img__arrow-right", onclick: "sliderObj.rightSlide();" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "product-description__layout-description layout-description" },
                    React.createElement(
                        "h1",
                        { className: "layout-description__header" },
                        " Товар "
                    ),
                    React.createElement(
                        "div",
                        { className: "layout-description__img-star img-star" },
                        React.createElement("div", { className: "img-star__raiting" })
                    ),
                    React.createElement(
                        "p",
                        null,
                        category.description
                    ),
                    React.createElement(
                        "p",
                        { className: "layout-description__label" },
                        React.createElement(
                            "label",
                            { "for": "quantiti" },
                            "Quantity"
                        )
                    ),
                    React.createElement("input", { className: "layout-description__quantiti", id: "quantiti", type: "number", min: "1", max: "100", value: "1" }),
                    React.createElement(
                        "div",
                        { className: "layout-description__add-cart add-cart" },
                        React.createElement(
                            "div",
                            { className: "add-cart__price" },
                            "Price: $555"
                        ),
                        React.createElement(
                            "a",
                            { className: "add-cart__btn", href: "CartPage.html" },
                            "Add to cart"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "layout-description__lineSocial lineSocial" },
                        React.createElement("a", { className: "lineSocial__twitter lineSocial__line-social", href: "" }),
                        React.createElement("a", { className: "lineSocial__vkontakte lineSocial__line-social", href: "" }),
                        React.createElement("a", { className: "lineSocial__facebook lineSocial__line-social", href: "" }),
                        React.createElement("a", { className: "lineSocial__instagram lineSocial__line-social", href: "" })
                    )
                )
            );
        });

        return React.createElement(
            "div",
            { className: "category-list" },
            description
        );
    }
});
var DescriptionPage = React.createClass({
  displayName: 'DescriptionPage',

  getDefaultProps: function () {
    return {
      description: [{ name: 'GIGABYTE-GA-78LMT-S2', img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg', description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.', minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg', minImg2: 'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg', minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg', minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg', minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg' }]
    };
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'product-section__product-description' },
      React.createElement(DescriptionList, { description: this.props.description })
    );
  }
});
var Footer = React.createClass({
	displayName: "Footer",

	render: function () {
		return React.createElement(
			"footer",
			{ className: "footer" },
			"© 2015 Powered by Footerist"
		);
	}
});
var Header = React.createClass({
  displayName: "Header",

  render: function () {
    return React.createElement(
      "header",
      { className: "page__header header" },
      React.createElement("a", { className: "header__elements header__elements--logo", href: "index.html" }),
      React.createElement(
        "a",
        { className: "header__elements header__elements--authorization header-elements__authorization", href: "#openModal" },
        React.createElement("span", { className: "header-elements__authorization--img" }),
        React.createElement(
          "span",
          { className: "header-elements__text--hidden" },
          "Profile"
        )
      ),
      React.createElement(
        "a",
        { className: "header__elements header__elements--basket header-elements__basket", href: "CartPage.html" },
        React.createElement("span", { className: "header-elements__basket--img" }),
        React.createElement(
          "span",
          { className: "header-elements__text--hidden" },
          "Cart"
        )
      ),
      React.createElement("input", { className: "header__elements header__elements--search", type: "search", placeholder: "Search" })
    );
  }
});
var ItemsList = React.createClass({
	displayName: "ItemsList",

	render: function () {
		var categories = this.props.categories.map(function (category, key) {
			return React.createElement(
				"li",
				{ className: "tab-content__layoutitems", key: key },
				React.createElement(
					"a",
					{ className: "Categories pages__items", href: category.link },
					React.createElement(
						"figure",
						{ className: "elementspagefigure" },
						React.createElement("div", { className: "elementspagelink__img " + category.img }),
						React.createElement(
							"figcaption",
							{ className: "elementspage__figcaption" },
							category.name,
							React.createElement("br", null),
							category.price
						)
					)
				)
			);
		});

		return React.createElement(
			"ul",
			{ className: "product-section__tab-content tab-content" },
			categories
		);
	}
});
var Navigation = React.createClass({
    displayName: "Navigation",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar--desktop" },
            React.createElement(
                "a",
                { className: "navbar__link navbar__link--active", href: "Motherboard.html" },
                React.createElement("div", { className: "navbar__img navbar__img--mother" }),
                "Motherboard"
            ),
            React.createElement(
                "a",
                { className: "navbar__link", href: "CPU.html" },
                React.createElement("div", { className: "navbar__img navbar__img--cpu" }),
                "CPU"
            ),
            React.createElement(
                "a",
                { className: "navbar__link", href: "RAM.html" },
                React.createElement("div", { className: "navbar__img navbar__img--ram" }),
                "RAM"
            ),
            React.createElement(
                "a",
                { className: "navbar__link", href: "videoAdapter.html" },
                React.createElement("div", { className: "navbar__img navbar__img--video" }),
                "Video adapter"
            ),
            React.createElement(
                "a",
                { className: "navbar__link", href: "HDD.html" },
                React.createElement("div", { className: "navbar__img navbar__img--hdd" }),
                "HDD"
            ),
            React.createElement(
                "a",
                { className: "navbar__link", href: "powerSource.html" },
                React.createElement("div", { className: "navbar__img navbar__img--power" }),
                "Power source"
            ),
            React.createElement(
                "a",
                { className: "navbar__link", href: "cooling.html" },
                React.createElement("div", { className: "navbar__img navbar__img--cooling" }),
                "Cooling"
            )
        );
    }
});
(function () {
    var motherboardPageElement = ['Motherboard', 'Motherboard', { href: 'GIGABYTE-GA-78LMT-S2', name: 'GIGABYTE GA-78LMT-S2', price: '$ 555', description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.' }, { name: 'GIGABYTE GA-990FXA-UD5', price: '$ 655' }, { name: 'GIGABYTE GA-B85-HD3', price: '$ 700' }, { name: 'GIGABYTE GA-H81M-S2PV', price: '$ 900' }];

    var homePageElement = [{ name: 'Motherboard' }, { name: 'CPU' }, { name: 'RAM' }, { name: 'VideoAdapter' }, { name: 'HDD' }, { name: 'PowerSource' }, { name: 'Cooling' }];
    function addCategories(arr) {
        var k = homePageElement.length;
        for (var i = 0; i < k; i++) {}
    }
})();

//# sourceMappingURL=build.js.map
