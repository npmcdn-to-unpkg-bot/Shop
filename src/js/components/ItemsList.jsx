var ItemsList = React.createClass ({
	render: function () {
	  var categories = this.props.categories.map(function(category, key) {
		return (
		  <li className="tab-content__layoutitems" key = {key}>
		    <a className="Categories pages__items" href={category.link}>
		      <figure className="elementspagefigure">
		        <div className="elementspagelink__img elementspagelink__img--img1">
		        </div>
		        <figcaption className="elementspage__figcaption">
		          {category.name}<br />{category.price}
		        </figcaption>
		      </figure>
		    </a>
		  </li>
		);
		  
	  });
		
	  return (
		<ul className="product-section__tab-content tab-content">
		  {categories}
        </ul>			
	  );
	}
})