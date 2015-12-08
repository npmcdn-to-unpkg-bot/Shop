'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(_react2.default.createElement(app), document.getElementById('page'));
});

var app = _react2.default.createClass({
    displayName: 'app',

    getDefaultProps: function getDefaultProps() {
        return {
            path: [{ page1: '', page2: '#itemList', page3: '#GIGABYTE-GA-78LMT-S2' }],
            categories: [{ name: 'GIGABYTE-GA-78LMT-S2', img: 'elementspagelink__img--img1', price: '$ 555', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S3', img: 'elementspagelink__img--img2', price: '$ 655', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S4', img: 'elementspagelink__img--img3', price: '$ 700', link: '#GIGABYTE-GA-78LMT-S2' }, { name: 'GIGABYTE-GA-78LMT-S5', img: 'elementspagelink__img--img4', price: '$ 900', link: '#GIGABYTE-GA-78LMT-S2' }],
            description: [{ name: 'GIGABYTE-GA-78LMT-S2',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }, { name: 'GIGABYTE-GA-78LMT-S3',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'CPU' }],
            breadcrumb: [{ name: 'GIGABYTE-GA-78LMT-S2',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }]

        };
    },
    render: function render() {
        return _react2.default.createElement(
            _reactRouter.Router,
            null,
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: HomePage }),
            _react2.default.createElement(_reactRouter.Route, { path: '/:category', component: Category }),
            _react2.default.createElement(_reactRouter.Route, { path: '/:category/:id', component: Description })
        );
    }
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = _react2.default.createClass({
    displayName: 'Breadcrumb',

    render: function render() {
        var breadcrumb = this.props.breadcrumb.map(function (breadcrumb, key) {
            return _react2.default.createElement(
                'ol',
                { className: 'product-description__breadcrumb breadcrumb', key: key },
                _react2.default.createElement(
                    'li',
                    { className: 'breadcrumb__list' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        'Главная'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'breadcrumb__list' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: breadcrumb.category },
                        breadcrumb.category
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'breadcrumb__list' },
                    breadcrumb.name
                )
            );
        });
        return _react2.default.createElement(
            'div',
            null,
            breadcrumb
        );
    }
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = _react2.default.createClass({
	displayName: 'Category',

	getInitialState: function getInitialState() {
		return {
			secondsElapsed: 0,
			category: this.props.params.category
		};
	},

	getItems: function getItems(category) {
		/*var arr = [
  	{name: 'Motherboard', value: this.props.Motherboard},
  	{name: 'CPU', value: this.props.CPU},
  	{name: 'RAM', value: this.props.RAM},
  	{name: 'VideoAdapter', value: this.props.VideoAdapter},
  	{name: 'HDD', value: this.props.HDD}, 
  	{name: 'PowerSource', value: this.props.PowerSource},
  	{name: 'Cooling', value: this.props.Cooling} 
  ];
  for (var i = 0; i <arr.length; i++) {
  	if (category == arr[i][name]) {				
  		return arr[i][value];
      		}					
  }*/

		if (category == 'Motherboard') {
			return this.props.Motherboard;
		}

		if (category == 'CPU') {
			return this.props.CPU;
		}

		if (category == 'HDD') {
			return this.props.HDD;
		}

		if (category == 'VideoAdapter') {
			return this.props.VideoAdapter;
		}

		if (category == 'Cooling') {
			return this.props.Cooling;
		}

		if (category == 'RAM') {
			return this.props.RAM;
		}

		if (category == 'PowerSource') {
			return this.props.PowerSource;
		}
	},

	getDefaultProps: function getDefaultProps() {
		return {
			Motherboard: [{ category: 'Motherboard', name: 'GIGABYTE-GA-78LMT-S2', img: 'unit-value__img-moth1', price: '$ 555', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'Motherboard', name: 'GIGABYTE-GA-78LMT-S3', img: 'unit-value__img-moth2', price: '$ 655', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'Motherboard', name: 'GIGABYTE-GA-78LMT-S4', img: 'unit-value__img-moth3', price: '$ 700', link: 'GIGABYTE-GA-78LMT-S4' }, { category: 'Motherboard', name: 'GIGABYTE-GA-78LMT-S5', img: 'unit-value__img-moth4', price: '$ 900', link: 'GIGABYTE-GA-78LMT-S5' }],

			CPU: [{ category: 'CPU', name: 'AMD A10-7870K OEM', img: 'unit-value__img-cpu1', price: '$ 1555', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'CPU', name: 'AMD FX-8300 OEM', img: 'unit-value__img-cpu2', price: '$ 6035', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'CPU', name: 'Intel Pentium G3420 OEM', img: 'unit-value__img-cpu3', price: '$ 7504', link: 'GIGABYTE-GA-78LMT-S4' }],

			RAM: [{ category: 'CPU', name: 'AMD Radeon Entertainment Series [R538G1] 8 Гб', img: 'unit-value__img-ram1', price: '$ 200', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'CPU', name: 'Crucial Ballistix Tactical [BLT4G3D] 4 Гб', img: 'unit-value__img-ram2', price: '$ 155', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'CPU', name: 'Kingston HyperX FURY Red Series [HX316C] 16 Гб', img: 'unit-value__img-ram3', price: '$ 455', link: 'GIGABYTE-GA-78LMT-S3' }],

			VideoAdapter: [{ category: 'VideoAdapter', name: 'Asus GeForce GT 730 [GT730-4GD3]', img: 'unit-value__img-video1', price: '$ 1555', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'VideoAdapter', name: 'MSI AMD Radeon R7 370 Gaming 4G', img: 'unit-value__img-video2', price: '$ 1999', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'VideoAdapter', name: 'GIGABYTE GeForce GTX 750 Ti', img: 'unit-value__img-video3', price: '$ 1777', link: 'GIGABYTE-GA-78LMT-S4' }, { category: 'VideoAdapter', name: 'Asus GeForce GT 730 [GT730-4GD3]', img: 'unit-value__img-video3', price: '$ 1555', link: 'GIGABYTE-GA-78LMT-S4' }],

			HDD: [{ category: 'HDD', name: 'Seagate Constellation ES.3 1 Тб', img: 'unit-value__img-hdd1', price: '$ 155', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'HDD', name: 'Toshiba DT 01ACA200 2 Тб', img: 'unit-value__img-hdd2', price: '$ 160', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'HDD', name: 'WD Caviar Blue WD10EZEX 1 Тб', img: 'unit-value__img-hdd3', price: '$ 200', link: 'GIGABYTE-GA-78LMT-S4' }, { category: 'HDD', name: 'Toshiba DT 01ACA200 2 Тб', img: 'unit-value__img-hdd2', price: '$ 160', link: 'GIGABYTE-GA-78LMT-S3' }],

			PowerSource: [{ category: 'PowerSource', name: 'Be Quiet PURE POWER L8 700W [BN225]', img: 'unit-value__img-power1', price: '$ 205', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'PowerSource', name: 'Chieftec A-135 Series 650W [APS-650SB]', img: 'unit-value__img-power2', price: '$ 160', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'PowerSource', name: 'Thermaltake TR2 600W [TR-600P]', img: 'unit-value__img-power3', price: '$ 305', link: 'GIGABYTE-GA-78LMT-S4' }, { category: 'PowerSource', name: 'Zalman GVM 850W [ZM850-GVM]', img: 'unit-value__img-power4', price: '$ 255', link: 'GIGABYTE-GA-78LMT-S4' }],

			Cooling: [{ category: 'Cooling', name: 'DEEPCOOL Ice Blade 100', img: 'unit-value__img-cooling1', price: '$ 15', link: 'GIGABYTE-GA-78LMT-S2' }, { category: 'Cooling', name: 'Thermaltake NiC L31', img: 'unit-value__img-cooling2', price: '$ 10', link: 'GIGABYTE-GA-78LMT-S3' }, { category: 'Cooling', name: 'Zalman CNPS5X', img: 'unit-value__img-cooling3', price: '$ 25', link: 'GIGABYTE-GA-78LMT-S4' }]

		};
	},

	tick: function tick() {
		this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	},

	componentDidMount: function componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function componentWillUnmount() {
		clearInterval(this.interval);
	},

	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'page' },
			_react2.default.createElement(
				'div',
				{ className: 'page__header' },
				_react2.default.createElement(Header, null)
			),
			_react2.default.createElement(
				'div',
				{ className: 'page__content' },
				_react2.default.createElement(Navigation, null),
				_react2.default.createElement(
					'article',
					{ className: 'goods goods--style' },
					_react2.default.createElement(
						'div',
						{ className: 'goods__view' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ className: 'viewmode', to: this.state.category },
							'List View'
						)
					),
					_react2.default.createElement(ItemsList, { items: this.getItems(this.state.category) }),
					_react2.default.createElement(
						'div',
						null,
						'Seconds Elapsed: ',
						Math.floor(this.state.secondsElapsed / 3600 % 24) + 'h ' + Math.floor(this.state.secondsElapsed / 60 % 60) + 'm ' + this.state.secondsElapsed % 60 + 'sec'
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'page__footer' },
				_react2.default.createElement(Footer, null)
			)
		);
	}
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductDescriptionTemplate = _react2.default.createClass({
    displayName: 'ProductDescriptionTemplate',

    render: function render() {
        var description = this.props.description.map(function (description, key) {
            return _react2.default.createElement(
                'div',
                { className: 'layout-description', key: key },
                _react2.default.createElement(
                    'h1',
                    { className: 'layout-description__header' },
                    description.name
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'layout-description__img-star img-star' },
                    _react2.default.createElement('div', { className: 'img-star__raiting' })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    description.description
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'layout-description__label' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'quantiti' },
                        'Quantity'
                    )
                ),
                _react2.default.createElement('input', { className: 'layout-description__quantiti', id: 'quantiti', type: 'number', min: '1', max: '100', defaultValue: '1' }),
                _react2.default.createElement(
                    'div',
                    { className: 'layout-description__add-cart add-cart' },
                    _react2.default.createElement(
                        'div',
                        { className: 'add-cart__price' },
                        'Price: ',
                        description.price
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'add-cart__btn', href: 'CartPage.html' },
                        'Add to cart'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'layout-description__lineSocial lineSocial' },
                    _react2.default.createElement('a', { className: 'lineSocial__twitter lineSocial__line-social', href: '' }),
                    _react2.default.createElement('a', { className: 'lineSocial__vkontakte lineSocial__line-social', href: '' }),
                    _react2.default.createElement('a', { className: 'lineSocial__facebook lineSocial__line-social', href: '' }),
                    _react2.default.createElement('a', { className: 'lineSocial__instagram lineSocial__line-social', href: '' })
                )
            );
        });
        return _react2.default.createElement(
            'article',
            { className: 'content' },
            _react2.default.createElement(Slider, null),
            description
        );
    }
});
'use strict';

var Description = React.createClass({
    displayName: 'Description',

    getInitialState: function getInitialState() {
        return {
            id: this.props.params.id
        };
    },
    getItemDescription: function getItemDescription(id) {
        if (id == 'GIGABYTE-GA-78LMT-S2') {
            return this.props.items1;
        }
        if (id == 'GIGABYTE-GA-78LMT-S3') {
            return this.props.items2;
        }
    },

    getDefaultProps: function getDefaultProps() {
        return {
            items1: [{ name: 'GIGABYTE-GA-78LMT-S2',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }],
            items2: [{ name: 'GIGABYTE-GA-78LMT-S3',
                description: 'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА',
                price: '$ 32452345', category: 'Motherboard' }],
            items3: [{ name: 'GIGABYTE-GA-78LMT-S4',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }],
            items4: [{ name: 'GIGABYTE-GA-78LMT-S5',
                description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
                price: '$ 555', category: 'Motherboard' }]
        };
    },
    render: function render() {
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
                { className: 'page__content' },
                React.createElement(Breadcrumb, { breadcrumb: this.getItemDescription(this.state.id) }),
                React.createElement(ProductDescriptionTemplate, { description: this.getItemDescription(this.state.id) })
            ),
            React.createElement(
                'div',
                { className: 'page__footer' },
                React.createElement(Footer, null)
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
			{ className: "footer" },
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
            { className: "header" },
            React.createElement("a", { className: "header__element header__element--logo", href: "/" }),
            React.createElement(
                "a",
                { className: "header__element header__element--authorization ", href: "#openModal" },
                React.createElement("span", { className: "header-element__authorization--img" }),
                React.createElement(
                    "span",
                    { className: "header-element__text--hidden" },
                    "Profile"
                )
            ),
            React.createElement(
                "a",
                { className: "header__element header__element--basket ", href: "CartPage.html" },
                React.createElement("span", { className: "header-element__basket--img" }),
                React.createElement(
                    "span",
                    { className: "header-element__text--hidden" },
                    "Cart"
                )
            ),
            React.createElement("input", { className: "header__element header__element--search", type: "search", placeholder: "Search" })
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
                { className: 'categories__layoutCategories', key: key },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { className: 'category', to: homePage.href },
                    _react2.default.createElement(
                        'figure',
                        null,
                        _react2.default.createElement('div', { className: 'img' + homePage.category }),
                        _react2.default.createElement(
                            'figcaption',
                            null,
                            homePage.category
                        )
                    )
                )
            );
        });
        return _react2.default.createElement(
            'article',
            { className: 'content' },
            _react2.default.createElement(
                'ul',
                { className: 'content__categories categories', id: 'tab-content' },
                homePage
            )
        );
    }
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = _react2.default.createClass({
    displayName: 'HomePage',

    getDefaultProps: function getDefaultProps() {
        return {
            homePage: [{ name: 'GIGABYTE-GA-78LMT-S2', category: 'Motherboard', href: '/Motherboard' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'CPU', href: '/CPU' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'RAM', href: '/RAM' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'VideoAdapter', href: '/VideoAdapter' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'HDD', href: '/HDD' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'PowerSource', href: '/PowerSource' }, { name: 'GIGABYTE-GA-78LMT-S2', category: 'Cooling', href: '/Cooling' }]
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'page' },
            _react2.default.createElement(
                'div',
                { className: 'page__header' },
                _react2.default.createElement(Header, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'page__content' },
                _react2.default.createElement(HomePageTemplate, { homePage: this.props.homePage })
            ),
            _react2.default.createElement(
                'div',
                { className: 'page__footer' },
                _react2.default.createElement(Footer, null)
            )
        );
    }
});
"use strict";
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemsList = _react2.default.createClass({
	displayName: 'ItemsList',

	render: function render() {

		var items = this.props.items.map(function (items, key) {
			return _react2.default.createElement(
				'li',
				{ className: 'goods__unit', key: key },
				_react2.default.createElement(
					_reactRouter.Link,
					{ className: 'unit-value', to: '/' + items.category + '/' + items.link },
					_react2.default.createElement(
						'figure',
						{ className: 'unit-value__figure' },
						_react2.default.createElement('div', { className: "unit-value__img " + items.img }),
						_react2.default.createElement(
							'figcaption',
							{ className: 'unit-value__figcaption' },
							items.name,
							_react2.default.createElement('br', null),
							items.price
						)
					)
				)
			);
		});
		return _react2.default.createElement(
			'ul',
			{ className: 'goods__folder' },
			items
		);
	}
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = _react2.default.createClass({
	displayName: 'Navigation',

	getDefaultProps: function getDefaultProps() {
		return {
			nav: [{ name: 'Motherboard', href: '#itemList', img: 'mother' }, { name: 'CPU', href: '#itemList', img: 'cpu' }, { name: 'RAM', href: '#itemList', img: 'ram' }, { name: 'VideoAdapter', href: '#itemList', img: 'video' }, { name: 'HDD', href: '#itemList', img: 'hdd' }, { name: 'PowerSource', href: '#itemList', img: 'power' }, { name: 'Cooling', href: '#itemList', img: 'cooling' }]
		};
	},

	render: function render() {
		var nav = this.props.nav.map(function (nav, key) {
			return _react2.default.createElement(
				_reactRouter.Link,
				{ className: 'navbar__link', to: '/Motherboard', key: key },
				_react2.default.createElement('div', { className: "navbar__img navbar__img--" + nav.img }),
				_react2.default.createElement(
					'span',
					{ className: 'caption' },
					nav.name
				)
			);
		});
		return _react2.default.createElement(
			'div',
			{ className: 'page__menu' },
			_react2.default.createElement(
				'nav',
				{ className: 'navbar navbar--style' },
				nav
			)
		);
	}
});
"use strict";

var PageName = {
    getPageName: function getPageName() {
        var path = window.location.hash;
        return path;
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
'use strict';

var Slider = React.createClass({
    displayName: 'Slider',

    getDefaultProps: function getDefaultProps() {
        return {
            imgSlider: [{
                img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg',
                minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
                minImg2: 'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
                minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
                minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
                minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg'
            }]
        };
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(SliderTemplate, { imgSlider: this.props.imgSlider })
        );
    }
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderTemplate = _react2.default.createClass({
    displayName: 'SliderTemplate',

    render: function render() {
        var imgSlider = this.props.imgSlider.map(function (imgSlider, key) {
            return _react2.default.createElement(
                'div',
                { className: 'slider-img', key: key },
                _react2.default.createElement(
                    'div',
                    { className: 'slider-img__big-img big-img' },
                    _react2.default.createElement('img', { className: 'big-img__positioner', src: imgSlider.img })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'slider-img__min-img min-img' },
                    _react2.default.createElement('div', { className: 'min-img__arrow min-img__arrow-left', onclick: 'sliderObj.leftSlide();' }),
                    _react2.default.createElement('img', { className: 'min-img--style', src: imgSlider.minImg1 }),
                    _react2.default.createElement('img', { className: 'min-img--style', src: imgSlider.minImg2 }),
                    _react2.default.createElement('img', { className: 'min-img--style', src: imgSlider.minImg3 }),
                    _react2.default.createElement('img', { className: 'min-img--style', src: imgSlider.minImg4 }),
                    _react2.default.createElement('img', { className: 'min-img--style', src: imgSlider.minImg5 }),
                    _react2.default.createElement('div', { className: 'min-img__arrow min-img__arrow-right', onclick: 'sliderObj.rightSlide();' })
                )
            );
        });
        return _react2.default.createElement(
            'div',
            { className: 'product-description__slider-img' },
            imgSlider
        );
    }

});