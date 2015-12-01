var Breadcrumb = React.createClass({
  render: function () {    
      return (
                <ol className="product-description__breadcrumb breadcrumb" >
                    <li className="breadcrumb__list"><a href="index.html">Главная</a></li>
                    <li className="breadcrumb__list"><a href="Motherboard.html">Категория</a></li>
                    <li className="breadcrumb__list">Товар</li>
                </ol>  
                );
  }
})