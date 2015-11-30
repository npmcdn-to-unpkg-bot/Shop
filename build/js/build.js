window.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(React.createElement(CategoryPage), document.getElementById('productDescription'));
});

/*Header*/
window.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(React.createElement(headerPage), document.getElementById('header'));
});

/*Footer*/
window.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(React.createElement(footerPage), document.getElementById('footer'));
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
var CategoryPage = React.createClass({
  displayName: 'CategoryPage',

  getDefaultProps: function () {
    return {
      categories: [{ name: 'Food', img: 'http://fakeimg.pl/350x200/?text=food', description: 'Food goods' }, { name: 'Computers', img: 'http://fakeimg.pl/350x200/?text=computer', description: 'Computers and peripherial' }]
    };
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'page' },
      React.createElement(
        'div',
        { className: 'page__content' },
        React.createElement(CategoryList, { categories: this.props.categories })
      )
    );
  }
});
var footerPage = React.createClass({
	displayName: "footerPage",

	render: function () {
		return React.createElement(
			"footer",
			{ className: "footer" },
			"© 2015 Powered by Footerist"
		);
	}
});
var headerPage = React.createClass({
    displayName: "headerPage",

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
//# sourceMappingURL=build.js.map
