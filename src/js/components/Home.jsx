import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var HomePageTemplate = React.createClass({
  render: function () {    
    var homePage = this.props.homePage.map(function(homePage, key) {
        return (
            <li className="categories__layoutCategories" key={key}>
                    <Link className="category" to={homePage.href} >
                        <figure>       
                            <div className={'img'+homePage.category}></div>
                            <figcaption>{homePage.category}</figcaption>
                        </figure>
                    </Link>
            </li>
        );
    });
      return (
        <article className="content">
          <ul className="content__categories categories" id="tab-content">
            {homePage}
           </ul>
        </article>
    );
    }
})