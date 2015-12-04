'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(_react2.default.createElement(DescriptionPage), document.getElementById('page'));
});
"use strict";
"use strict";

var Breadcrumb = React.createClass({
  displayName: "Breadcrumb",

  render: function render() {
    var breadcrumb = this.props.breadcrumb.map(function (category, key) {
      return React.createElement(
        "ol",
        { className: "product-description__breadcrumb breadcrumb", key: key },
        React.createElement(
          "li",
          { className: "breadcrumb__list" },
          React.createElement(
            "a",
            { href: "/" },
            "Главная"
          )
        ),
        React.createElement(
          "li",
          { className: "breadcrumb__list" },
          React.createElement(
            "a",
            { href: category.category },
            category.category
          )
        ),
        React.createElement(
          "li",
          { className: "breadcrumb__list" },
          category.name
        )
      );
    });

    return React.createElement(
      "div",
      null,
      breadcrumb
    );
  }
});
'use strict';

var CategoryPage = React.createClass({
		displayName: 'CategoryPage',

		getDefaultProps: function getDefaultProps() {
				return {
						categories: [{ name: 'GIGABYTE-GA-78LMT-S2', img: 'elementspagelink__img--img1', price: '$ 555', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S3', img: 'elementspagelink__img--img2', price: '$ 655', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S4', img: 'elementspagelink__img--img3', price: '$ 700', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S5', img: 'elementspagelink__img--img4', price: '$ 900', link: '#GIGABYTE-GA-78LMT-S2' }]
				};
		},

		render: function render() {
				return React.createElement(
						'div',
						{ className: 'newv__page' },
						React.createElement(
								'div',
								{ className: 'page__header' },
								React.createElement(Header, null)
						),
						React.createElement(Navigation, null),
						React.createElement(
								'article',
								{ className: 'newv__elementspage newv__elementspage--style' },
								React.createElement(
										'div',
										{ className: 'newv__viewmode' },
										React.createElement(
												'a',
												{ className: 'newv__elementspagelink', href: 'MotherboardList.html' },
												'List View'
										)
								),
								React.createElement(ItemsList, { categories: this.props.categories })
						),
						React.createElement(Footer, null)
				);
		}
});
"use strict";

var productDescriptionTemp = React.createClass({
    displayName: "productDescriptionTemp",

    render: function render() {
        var description = this.props.description.map(function (category, key) {
            return React.createElement(
                "div",
                { className: "layout-description", key: key },
                React.createElement(
                    "h1",
                    { className: "layout-description__header" },
                    category.name
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
                        { htmlFor: "quantiti" },
                        "Quantity"
                    )
                ),
                React.createElement("input", { className: "layout-description__quantiti", id: "quantiti", type: "number", min: "1", max: "100", defaultValue: "1" }),
                React.createElement(
                    "div",
                    { className: "layout-description__add-cart add-cart" },
                    React.createElement(
                        "div",
                        { className: "add-cart__price" },
                        "Price: ",
                        category.price
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
            );
        });
        return React.createElement(
            "div",
            { className: "" },
            description
        );
    }
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionPage = _react2.default.createClass({
    displayName: 'DescriptionPage',

    getInitialState: function getInitialState() {
        return {
            currentPage: PageName.getPageName()
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            categories: [{ name: 'GIGABYTE-GA-78LMT-S2', img: 'elementspagelink__img--img1', price: '$ 555', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S3', img: 'elementspagelink__img--img2', price: '$ 655', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S4', img: 'elementspagelink__img--img3', price: '$ 700', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S5', img: 'elementspagelink__img--img4', price: '$ 900', link: '#GIGABYTE-GA-78LMT-S2' }],
            imgSlider: [{ img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg',
                minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
                minImg2: 'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
                minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
                minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
                minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg' }],
            nav: [{ name: 'Motherboard', href: '#itemList', img: 'mother' }, { name: 'CPU', href: '#itemList', img: 'cpu' }, { name: 'RAM', href: '#itemList', img: 'ram' }, { name: 'VideoAdapter', href: '#itemList', img: 'video' }, { name: 'HDD', href: '#itemList', img: 'hdd' }, { name: 'PowerSource', href: '#itemList', img: 'power' }, { name: 'Cooling', href: '#itemList', img: 'cooling' }],
            description: [{ name: 'GIGABYTE-GA-78LMT-S2',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }],
            breadcrumb: [{ name: 'GIGABYTE-GA-78LMT-S2',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }]

        };
    },

    render: function render() {
        return _react2.default.createElement(
            _reactRouter.Router,
            null,
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: HomePageRender }),
            _react2.default.createElement(
                _reactRouter.Route,
                { path: ':id', component: Footer },
                ' '
            ),
            _react2.default.createElement(
                _reactRouter.Route,
                { path: 'CPU', component: Header },
                ' '
            ),
            _react2.default.createElement(
                _reactRouter.Route,
                { path: 'CPU', component: Header },
                ' '
            )
        );
    }
});
"use strict";

var Footer = React.createClass({
	displayName: "Footer",

	render: function render() {
		return React.createElement(
			"footer",
			{ className: "footer__mother" },
			"© 2015 Powered by Footerist"
		);
	}
});
"use strict";

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "header",
      { className: "page__header all__header" },
      React.createElement("a", { className: "all__header__elements all__header__elements--logo", href: "/" }),
      React.createElement(
        "a",
        { className: "all__header__elements all__header__elements--authorization all__header-elements__authorization", href: "#openModal" },
        React.createElement("span", { className: "all__header-elements__authorization--img" }),
        React.createElement(
          "span",
          { className: "all__header-elements__text--hidden" },
          "Profile"
        )
      ),
      React.createElement(
        "a",
        { className: "all__header__elements all__header__elements--basket all__header-elements__basket", href: "CartPage.html" },
        React.createElement("span", { className: "all__header-elements__basket--img" }),
        React.createElement(
          "span",
          { className: "all__header-elements__text--hidden" },
          "Cart"
        )
      ),
      React.createElement("input", { className: "all__header__elements all__header__elements--search", type: "search", placeholder: "Search" })
    );
  }
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePageTemplate = _react2.default.createClass({
    displayName: 'HomePageTemplate',

    render: function render() {
        var homePage = this.props.homePage.map(function (homePage, key) {
            return _react2.default.createElement(
                'li',
                { className: 'tab-content__layoutCategories', key: key },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { className: 'Categories Motherboard', to: homePage.href, query: { name: 'GIGABYTE-GA-78LMT-S2' } },
                    _react2.default.createElement(
                        'figure',
                        null,
                        _react2.default.createElement('div', { className: 'img' + homePage.name }),
                        _react2.default.createElement(
                            'figcaption',
                            null,
                            homePage.name
                        )
                    )
                )
            );
        });
        return _react2.default.createElement(
            'div',
            { className: 'product-description__layout-description' },
            _react2.default.createElement(
                'ul',
                { className: 'product-section__tab-content tab-content', id: 'tab-content' },
                homePage
            )
        );
    }
});
var HomePageRender = _react2.default.createClass({
    displayName: 'HomePageRender',

    getInitialState: function getInitialState() {
        return {
            currentPage: PageName.getPageName()
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            homePage: [{ name: 'GIGABYTE-GA-78LMT-S2', category: 'Motherboard', href: '/Motherboard' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'CPU', href: 'CPU' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'RAM', href: '/RAM' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'VideoAdapter', href: '/VideoAdapter' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'HDD', href: '/HDD' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'PowerSource', href: '/PowerSource' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'Cooling', href: '/Cooling' }]
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Header, null),
            _react2.default.createElement(HomePageTemplate, { homePage: this.props.homePage }),
            _react2.default.createElement(Footer, null)
        );
    }
});

var HomePageRender = _react2.default.createClass({
    displayName: 'HomePageRender',

    getInitialState: function getInitialState() {
        return {
            currentPage: PageName.getPageName()
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            homePage: [{ name: 'Motherboard', href: '/Motherboard' }, { name: 'CPU', href: 'CPU' }, { name: 'RAM', href: '/RAM' }, { name: 'VideoAdapter', href: '/VideoAdapter' }, { name: 'HDD', href: '/HDD' }, { name: 'PowerSource', href: '/PowerSource' }, { name: 'Cooling', href: '/Cooling' }]
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Header, null),
            _react2.default.createElement(HomePageTemplate, { homePage: this.props.homePage }),
            _react2.default.createElement(Footer, null)
        );
    }
});
"use strict";
"use strict";

var ItemsList = React.createClass({
	displayName: "ItemsList",

	render: function render() {
		var categories = this.props.categories.map(function (category, key) {
			return React.createElement(
				"li",
				{ className: "newv__tab-content__layoutitems", key: key },
				React.createElement(
					"a",
					{ className: "newv__Categories newv__pages__items", href: category.link },
					React.createElement(
						"figure",
						{ className: "newv__elementspagefigure" },
						React.createElement("div", { className: "newv__elementspagelink__img " + category.img }),
						React.createElement(
							"figcaption",
							{ className: "newv__elementspage__figcaption" },
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
			{ className: "newv__product-section__tab-content newv__tab-content" },
			categories
		);
	}
});
"use strict";

var Navigation = React.createClass({
  displayName: "Navigation",

  render: function render() {
    var nav = this.props.nav.map(function (category, key) {
      return React.createElement(
        "a",
        { className: "page__navbar__link", href: category.href },
        React.createElement("div", { className: "page__navbar__img page__navbar__img--" + category.img }),
        React.createElement(
          "span",
          { className: "caption" },
          category.name
        )
      );
    });
    return React.createElement(
      "div",
      { className: "page__menu" },
      React.createElement(
        "nav",
        { className: "page__navbar page__navbar--desktop" },
        nav
      )
    );
  }
});
'use strict';

var PageName = {
    getPageName: function getPageName() {
        var path = window.location.hash;
        return path.replace(/\?.*/, '');
    }
};
'use strict';

(function () {
    var motherboardPageElement = ['Motherboard', 'Motherboard', { href: 'GIGABYTE-GA-78LMT-S2', name: 'GIGABYTE GA-78LMT-S2', price: '$ 555', description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.' }, { name: 'GIGABYTE GA-990FXA-UD5', price: '$ 655' }, { name: 'GIGABYTE GA-B85-HD3', price: '$ 700' }, { name: 'GIGABYTE GA-H81M-S2PV', price: '$ 900' }];

    var homePageElement = [{ name: 'Motherboard' }, { name: 'CPU' }, { name: 'RAM' }, { name: 'VideoAdapter' }, { name: 'HDD' }, { name: 'PowerSource' }, { name: 'Cooling' }];
    function addCategories(arr) {
        var k = homePageElement.length;
        for (var i = 0; i < k; i++) {}
    }
})();
"use strict";
"use strict";
"use strict";

var Slider = React.createClass({
    displayName: "Slider",

    render: function render() {
        var imgSlider = this.props.imgSlider.map(function (category, key) {
            var _this = this;

            return React.createElement(
                "div",
                { className: "slider-img", ref: function ref(_ref) {
                        return _this.myTextInput = _ref;
                    }, key: key },
                "kjhkjh",
                React.createElement(
                    "div",
                    { className: "slider-img__big-img big-img" },
                    React.createElement("img", { className: "big-img__positioner", src: category.img })
                ),
                React.createElement(
                    "div",
                    { className: "slider-img__min-img min-img" },
                    React.createElement("div", { className: "min-img__arrow min-img__arrow-left", onclick: "sliderObj.leftSlide();" }),
                    React.createElement("img", { className: "min-img--style", src: category.minImg1 }),
                    React.createElement("img", { className: "min-img--style", src: category.minImg2 }),
                    React.createElement("img", { className: "min-img--style", src: category.minImg3 }),
                    React.createElement("img", { className: "min-img--style", src: category.minImg4 }),
                    React.createElement("img", { className: "min-img--style", src: category.minImg5 }),
                    React.createElement("div", { className: "min-img__arrow min-img__arrow-right", onclick: "sliderObj.rightSlide();" })
                )
            );
        });
        return React.createElement(
            "div",
            { className: "product-description__slider-img" },
            imgSlider
        );
    }

});