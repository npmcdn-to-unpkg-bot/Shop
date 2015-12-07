import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var HomePage = React.createClass({
    getInitialState: function(){
        return {
            currentPage: PageName.getPageName()
        }
    },
    getDefaultProps: function () {
    return {
        homePage: [
            {name:'GIGABYTE-GA-78LMT-S2', category: 'Motherboard', href: '/Motherboard'},
            {name:'GIGABYTE-GA-78LMT-S2', category: 'CPU', href: 'CPU'},
            {name:'GIGABYTE-GA-78LMT-S2', category: 'RAM', href: '/RAM'},
            {name:'GIGABYTE-GA-78LMT-S2', category: 'VideoAdapter', href: '/VideoAdapter'},
            {name:'GIGABYTE-GA-78LMT-S2', category: 'HDD', href: '/HDD'},
            {name:'GIGABYTE-GA-78LMT-S2', category: 'PowerSource', href: '/PowerSource'},
            {name:'GIGABYTE-GA-78LMT-S2', category: 'Cooling', href: '/Cooling'}
        ]
    }
  },
render: function () {
    return (
    <div className="page">
        <Header />
        <HomePageTemplate homePage={this.props.homePage} /> 
        <Footer />
    </div>
    );
  }
})

