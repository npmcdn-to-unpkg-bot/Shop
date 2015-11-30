window.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(React.createElement(CategoryPage), document.getElementById('productDescription'));
});

/*Рендер страницы*/
window.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(React.createElement(CategoryPage), document.getElementById('page'));
});

/*Footer*/
window.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(React.createElement(Footer), document.getElementById('footer'));
});
var CategoryList = React.createClass({
  displayName: "CategoryList",

  render: function () {
    var self = this;

    var categories = this.props.categories.map(function (category, key) {
      return React.createElement(
        "div",
        { className: "category", key: key },
        React.createElement("img", { className: "category__img", src: category.img }),
        React.createElement(
          "div",
          { className: "category__description" },
          category.description
        )
      );
    });

    return React.createElement(
      "div",
      { className: "category-list" },
      categories
    );
  }
});
/*var CategoryPage = React.createClass({
  getDefaultProps: function () {
    return {
      categories: [
        {name:'Food', img:'http://fakeimg.pl/350x200/?text=food', description:'Food goods'},
        {name:'Computers', img:'http://fakeimg.pl/350x200/?text=computer', description:'Computers and peripherial'},
      ],
    }
  },

  render: function () {
    return (
      <div className="page">
        <div className="page__header">
          <Header />
        </div>
        <div className="page__content">
          <CategoryList categories={this.props.categories}/>
        </div>
      </div>
    );
  }
})*/

var CategoryPage = React.createClass({
  displayName: 'CategoryPage',

  getDefaultProps: function () {
    return {
      categories: [{ name: 'GIGABYTE GA-78LMT-S2', price: '$ 555', img: '../img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg' }, { name: 'GIGABYTE GA-990FXA-UD5', price: '$ 655', img: '../img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg' }, { name: 'GIGABYTE-GA-78LMT-S4', price: '$ 700', img: '../img/motherboard/Gigabyte/GIGABYTE%20GA-B85-HD3.jpg' }, { name: 'GIGABYTE-GA-78LMT-S5', price: '$ 900', img: '../img/motherboard/Gigabyte/GIGABYTE%20GA-H81M-S2PV.jpg' }]
    };
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'wrapper' },
      React.createElement(Header, null),
      React.createElement(Navigation, null)
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
            { className: "wrapper__header header" },
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
//# sourceMappingURL=build.js.map
