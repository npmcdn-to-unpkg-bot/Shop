var Breadcrumb = React.createClass({
  render: function () {  
      var breadcrumb = this.props.breadcrumb.map(function(category, key) {
      return (
            <ol className="product-description__breadcrumb breadcrumb" key={key}>
                <li className="breadcrumb__list"><a href="/">Главная</a></li>
                <li className="breadcrumb__list"><a href={category.category}>{category.category}</a></li>
                <li className="breadcrumb__list">{category.name}</li>
            </ol>  
            );
    });

        return (
      <div >
        {breadcrumb}
      </div>
    );
  }
})