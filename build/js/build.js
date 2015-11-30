window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(CategoryPage), document.getElementById('productDescription'));
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
//# sourceMappingURL=build.js.map
