import {HomePageTemplate} from 'Home.jsx'
import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
var HomePage = React.createClass({
    getDefaultProps: function () {
        return {
           
            homePage: [
                {name:'GIGABYTE-GA-78LMT-S2', category: 'Motherboard', href: '/Categories/Motherboard'},
                {name:'GIGABYTE-GA-78LMT-S2', category: 'CPU', href: '/Categories/CPU'},
                {name:'GIGABYTE-GA-78LMT-S2', category: 'RAM', href: '/Categories/RAM'},
                {name:'GIGABYTE-GA-78LMT-S2', category: 'VideoAdapter', href: '/Categories/VideoAdapter'},
                {name:'GIGABYTE-GA-78LMT-S2', category: 'HDD', href: '/Categories/HDD'},
                {name:'GIGABYTE-GA-78LMT-S2', category: 'PowerSource', href: '/Categories/PowerSource'},
                {name:'GIGABYTE-GA-78LMT-S2', category: 'Cooling', href: '/Categories/Cooling'}
            ]
        }
  },
    render: function () {
        return (
        <div className="page">
            <div className="page__header"> 
                <Header />
            </div>
            <div className="page__content"> 
                <HomePageTemplate homePage={this.props.homePage} />
            </div>
            <div className="page__footer"> 
                <Footer />
            </div>

        </div>
        );
  }
})


export {HomePage}

