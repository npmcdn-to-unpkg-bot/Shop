import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import {Dispatcher} from 'Dispatcher.jsx'
import {descriptionWare} from 'DescriptionStore.jsx'
var Breadcrumb = React.createClass({



    render: function () {  
          var breadcrumb = this.props.breadcrumb.map(function(breadcrumb, key) {
            return (
                <ol className="breadcrumb" key={key}>
                    <li className="breadcrumb__list">
                        <Link to="/">Главная</Link></li>
                    <li className="breadcrumb__list">
                        <Link to={'Categories/' + breadcrumb.category}>{breadcrumb.category}</Link>
                    </li>
                    <li className="breadcrumb__list">{breadcrumb.name}</li>
                </ol>  
                );
            });
            return (
                <div className="description-breadcrumb">            
                    {breadcrumb}
                </div>
            );
        }
})

export {Breadcrumb}