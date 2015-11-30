window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(DescriptionPage), document.getElementById('productDescription'));
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
/*Описание товара*/
var DescriptionList = React.createClass({
    displayName: "DescriptionList",

    render: function () {
        var Description = this.props.description.map(function (category) {
            return React.createElement(
                "div",
                { className: "product-description" },
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
            Description
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
//Make an object model for pages (at least one)
//* categories
//* wares
//* cart
//
//Place initial data to js as an array of objects
//
//Add js script on page load, which shoud:
//* take initial data model
//* find root DOM node to place model data (by ID)
//* iterate throw data model array and build child DOM nodes
//* insert builded nodes to root childs
(function () {
    var homePageElement = [{ name: 'Motherboard' }, { name: 'CPU' }, { name: 'RAM' }, { name: 'VideoAdapter' }, { name: 'HDD' }, { name: 'PowerSource' }, { name: 'Cooling' }];
    function addCategories(arr) {
        var k = homePageElement.length;
        for (var i = 0; i < k; i++) {
            var name = homePageElement[i].name,
                img = homePageElement[i].img;
            var newElement = document.getElementById('tab-content');
            var newLi = document.createElement('li');
            newLi.className = "tab-content__layoutCategories";
            newLi.innerHTML = '<a class="Categories ' + name + '" href="' + name + '.html">\
        <figure>\
            <div class="img' + name + '"></div>\
            <figcaption>' + name + '</figcaption>\
        </figure>\
        </a>';
            newElement.appendChild(newLi);
        }
    }
    addCategories(homePageElement);
    addCategories(homePageElement);
    addCategories(homePageElement);addCategories(homePageElement);addCategories(homePageElement);addCategories(homePageElement);
})();
(function () {
    var motherboardPageElement = ['Motherboard', 'Motherboard', { href: 'GIGABYTE-GA-78LMT-S2', name: 'GIGABYTE GA-78LMT-S2', price: '$ 555', description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.' }, { name: 'GIGABYTE GA-990FXA-UD5', price: '$ 655' }, { name: 'GIGABYTE GA-B85-HD3', price: '$ 700' }, { name: 'GIGABYTE GA-H81M-S2PV', price: '$ 900' }];

    var homePageElement = [{ name: 'Motherboard' }, { name: 'CPU' }, { name: 'RAM' }, { name: 'VideoAdapter' }, { name: 'HDD' }, { name: 'PowerSource' }, { name: 'Cooling' }];
    function addCategories(arr) {
        var k = homePageElement.length;
        for (var i = 0; i < k; i++) {}
    }
})();

//# sourceMappingURL=build.js.map
