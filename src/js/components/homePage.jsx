var HomePage = React.createClass({
  render: function () {    
    var homePage = this.props.homePage.map(function(category, key) {
      return (
            <li className="tab-content__layoutCategories" key={key}>
                <a className="Categories Motherboard" href={category.href}>
                    <figure>       
                        <div className={'img'+category.name}></div>
                        <figcaption>{category.name}</figcaption>
                    </figure>
                </a>
            </li>
                );
    });
      return (
        <div className="product-description__layout-description">
          <ul className="product-section__tab-content tab-content" id="tab-content">
            {homePage}
           </ul>
        </div>
    );
    }
})