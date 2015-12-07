import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var ItemsList = React.createClass ({
	render: function () {
	  var items = this.props.items.map(function(item, key) {
		return (
		  <li className="newv__tab-content__layoutitems" key = {key}>
		    <Link className="newv__Categories newv__pages__items" to="/Motherboard/" query={{ foo: 'bar' }}  >
		      <figure className="newv__elementspagefigure">
		        <div className={"newv__elementspagelink__img " + item.img}>
		        </div>
		        <figcaption className="newv__elementspage__figcaption">
		          {item.name}<br />{item.price}
		        </figcaption>
		      </figure>
		    </Link>
		  </li>
		);
		  
	  });
		
	  return (
		<ul className="newv__product-section__tab-content newv__tab-content">
		  {items}
        </ul>			
	  );
	}
})