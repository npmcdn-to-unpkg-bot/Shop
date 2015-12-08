import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var Breadcrumb = React.createClass({
  render: function () {  
      var breadcrumb = this.props.breadcrumb.map(function(breadcrumb, key) {
        return (
            <ol className="product-description__breadcrumb breadcrumb" key={key}>
                <li className="breadcrumb__list">
                    <Link to="/">Главная</Link></li>
                <li className="breadcrumb__list">
                    <Link to={breadcrumb.category}>{breadcrumb.category}</Link>
                </li>
                <li className="breadcrumb__list">{breadcrumb.name}</li>
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
export {Breadcrumb}