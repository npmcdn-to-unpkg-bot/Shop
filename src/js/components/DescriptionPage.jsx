import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var DescriptionPage = React.createClass({
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
        imgSlider: [
        	{img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg',
        	minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
        	minImg2:'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
       	 	minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
        	minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
        	minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',}
        ],
        
        description: [
        	{name:'GIGABYTE-GA-78LMT-S2',
        	description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        	price: '$ 555', category: 'Motherboard'}
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
        	<Route path="Motherboard" component={CategoryPage} />
        	<Route path=":id" component={Footer} />
    	</Router>
    );
  }
})
	