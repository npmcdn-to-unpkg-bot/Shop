import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var ItemsList = React.createClass ({
	render: function () {
	  var categories = this.props.categories.map(function(category, key) {
		return (
		  <li className="newv__tab-content__layoutitems" key = {key}>
		    <Link className="newv__Categories newv__pages__items" query={{ foo: 'bar' }}  to="/Motherboard/GIGABYTE-GA-78LMT-S2">
		      <figure className="newv__elementspagefigure">
		        <div className={"newv__elementspagelink__img " + category.img}>
		        </div>
		        <figcaption className="newv__elementspage__figcaption">
		          {category.name}<br />{category.price}
		        </figcaption>
		      </figure>
		    </Link>
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