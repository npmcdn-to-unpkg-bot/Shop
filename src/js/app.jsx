import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        React.createElement(app), 
        document.getElementById('page')
    );
});

var app = React.createClass({
    getDefaultProps: function () {
    return {
		path: [
			{page1:'', page2: '#itemList', page3: '#GIGABYTE-GA-78LMT-S2'}
		],
        categories: [
        	{name:'GIGABYTE-GA-78LMT-S2', img:'elementspagelink__img--img1', price:'$ 555', link:'#GIGABYTE-GA-78LMT-S2'}, 
			{name:'GIGABYTE-GA-78LMT-S3', img:'elementspagelink__img--img2', price:'$ 655', link:'#GIGABYTE-GA-78LMT-S2'}, 
			{name:'GIGABYTE-GA-78LMT-S4', img:'elementspagelink__img--img3', price:'$ 700', link:'#GIGABYTE-GA-78LMT-S2'}, 
			{name:'GIGABYTE-GA-78LMT-S5', img:'elementspagelink__img--img4', price:'$ 900', link:'#GIGABYTE-GA-78LMT-S2'}     
      	],
        description: [
        	{name:'GIGABYTE-GA-78LMT-S2',
        	description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        	price: '$ 555', category: 'Motherboard'},
            {name:'GIGABYTE-GA-78LMT-S3',
        	description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        	price: '$ 555', category: 'CPU'}
        ],      
        breadcrumb: [
        	{name:'GIGABYTE-GA-78LMT-S2',
        	description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        	price: '$ 555', category: 'Motherboard'}
        ],
       
    }
  	},	
	render: function () {
    	return (
    	<Router>
        	<Route path="/" component={HomePage} /> 
            <Route path="/:category" component={CategoryMotherboard} />
            <Route path="/:category/:id" component={Description} />
    	</Router>
    );
  }
})

