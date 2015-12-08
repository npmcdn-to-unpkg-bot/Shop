import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var ItemsList = React.createClass ({
	render: function () {
        
	  var items = this.props.items.map(function(items, key) {
		return (
		  <li className="goods__unit" key = {key}>
		    <Link className="unit-value" to={'/'+items.category+'/'+items.link} >
		      <figure className="unit-value__figure">
		        <div className={"unit-value__img " + items.img}>
		        </div>
		        <figcaption className="unit-value__figcaption">
		          {items.name}<br />{items.price}
		        </figcaption>
		      </figure>
		    </Link>
		  </li>
		);
	  });
	  return (
		<ul className="goods__folder">
		  {items}
        </ul>			
	  );
	}
})
export {ItemsList}