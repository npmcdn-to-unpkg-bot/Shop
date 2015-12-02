var ItemsList = React.createClass ({
	render: function () {
	  var categories = this.props.categories.map(function(category, key) {
		return (
		  <li className="newv__tab-content__layoutitems" key = {key}>
		    <a className="newv__Categories newv__pages__items" href={category.link}>
		      <figure className="newv__elementspagefigure">
		        <div className={"newv__elementspagelink__img " + category.img}>
		        </div>
		        <figcaption className="newv__elementspage__figcaption">
		          {category.name}<br />{category.price}
		        </figcaption>
		      </figure>
		    </a>
		  </li>
		);
		  
	  });
		
	  return (
		<ul className="newv__product-section__tab-content newv__tab-content">
		  {categories}
        </ul>			
	  );
	}
})