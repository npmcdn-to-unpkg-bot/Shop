import {HomePageTemplate} from 'Home.jsx'
import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router'
import {Navigation} from 'Navigation.jsx'
import {ItemsList} from 'ItemsList.jsx'
import {Goods} from 'GoodsStore.jsx'
 	
var Category = React.createClass({
  	
	getInitialState: function () {
		return {
			items: [],
        	category: this.props.params.category,
        };
  	},
    
	/*getItems: function(category) {
		var arrCategories = ['Motherboard', 'CPU', 'RAM', 'VideoAdapter', 'HDD', 'PowerSource', 'Cooling'];
		for (var i = 0; i <arrCategories.length; i++) {
			if (category == arrCategories[i]) {				
				return this.props[arrCategories[i]];
      		}					
		}
    },*/
	
	componentWillReceiveProps: function (newProps) {
		this.setState ({
			category: newProps.params.category
		})	
	},
	
	/*componentDidMount: function(){
        Dispatcher.on('update-goods', this.update);
        Dispatcher.emit('get-goods');
    },
	
    componentWillUnMount: function(){
        Dispatcher.off('update-goods', this.update);
    },*/	

	render: function () {
		var items = this.state.items.map(function(item, key) {
			return (
			  <li className="goods__unit" key = {key}>
				<Link className="unit-value" to={'/Categories/'+item.category+'/'+item.link} >
				  <figure className="unit-value__figure">
					<div className={"unit-value__img " + items.img}>
					</div>
					<figcaption className="unit-value__figcaption">
					  {item.name}<br />{item.price}
					</figcaption>
				  </figure>
				</Link>
			  </li>
			);
	  	});
		return (
			<div className="page">
			
				<div className="page__header">
					<Header />
				</div>
			
                <div className="page__content">
			
					<Navigation />

					<article className="goods goods--style">      
						<div className="goods__view">
							<Link className="viewmode" to={'/'} >
								List View
							</Link>
						</div>
						<ul className="goods__folder">
		  					{items}
        				</ul>									
					</article>
                </div>											
                <div className="page__footer">
				    <Footer />
                </div>
											
			</div>		
		);
	}
})
export {Category}