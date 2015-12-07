import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var HomePageTemplate = React.createClass({
  render: function () {    
    var homePage = this.props.homePage.map(function(homePage, key) {
      return (
        
            <li className="tab-content__layoutCategories" key={key}>
                    <Link className="Categories Motherboard" to={homePage.href} >                        
                        <figure>       
                            <div className={'img'+homePage.category}></div>
                            <figcaption>{homePage.category}</figcaption>
                        </figure>
                    </Link>
            </li>
                );
    });
      return (
        <article className="product-description__layout-description">
          <ul className="product-section__tab-content tab-content" id="tab-content">
            {homePage}
           </ul>
        </article>
    );
    }
})