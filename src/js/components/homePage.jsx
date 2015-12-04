import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var HomePageTemplate = React.createClass({
  render: function () {    
    var homePage = this.props.homePage.map(function(homePage, key) {
      return (
        
            <li className="tab-content__layoutCategories" key={key}>
                    <Link className="Categories Motherboard" to={homePage.href}>                    
                        <figure>       
                            <div className={'img'+homePage.name}></div>
                            <figcaption>{homePage.name}</figcaption>
                        </figure>
                    </Link>
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
var HomePageRender = React.createClass({
    getInitialState: function(){
        return {
            currentPage: PageName.getPageName()
        }
    },
    getDefaultProps: function () {
    return {
        homePage: [
            {name: 'Motherboard', href: '/Motherboard'},
            {name: 'CPU', href: 'CPU'},
            {name: 'RAM', href: '/RAM'},
            {name: 'VideoAdapter', href: '/VideoAdapter'},
            {name: 'HDD', href: '/HDD'},
            {name: 'PowerSource', href: '/PowerSource'},
            {name: 'Cooling', href: '/Cooling'}
        ]
    }
  },
render: function () {
    return (
    <div>
        <Header/>
        <HomePageTemplate homePage={this.props.homePage} /> 
        <Footer />
    </div>
    );
  }
})