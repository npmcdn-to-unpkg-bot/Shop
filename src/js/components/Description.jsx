import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import {Slider} from 'slider.jsx'
import {Breadcrumb} from 'Breadcrumb.jsx'
import { Router, Route, Link } from 'react-router'	
import {SliderTemplate} from 'sliderTemplate.jsx'
import {Dispatcher} from 'Dispatcher.jsx'
import {descriptionWare} from 'DescriptionStore.jsx'
var ProductDescriptionTemplate = React.createClass({
    getInitialState: function () {
		return {
        description:[],
        id: this.props.params.id,
        };
  	},
    componentDidMount: function(){
        Dispatcher.on('update-description', this.update);
        Dispatcher.emit('get-description');
        Dispatcher.emit('get-breadcrumb', this.state.id);
    },
    componentWillUnmount: function(){
        Dispatcher.off('update-description', this.update);
    },
    update: function(data){
        var id = this.state.id 
        for (var key in data){
            for (var j = 0; j<data[key].length; j++){
                if (data[key][j].link == id ){
                    this.setState({description: data[key]})
                }
            }
        }
    },
    componentWillReceiveProps: function (newProps) {
		this.setState ({
			id: newProps.params.id
		}, function() {
			Dispatcher.emit('get-description');			
		});	
	},
    render: function () {       
    var description = this.state.description.map(function(description, key) {
      return (
                <div className="layout-description"  key={key}> 
                    <h1 className="layout-description__header">{description.name}</h1>
                    <div className="layout-description__img-star img-star">
                        <div className="img-star__raiting"></div>
                    </div>
                    <p>{description.description}</p>
                    <p className="layout-description__label">
          <label htmlFor="quantiti">Quantity</label></p>
          <input className="layout-description__quantiti" id="quantiti" type="number" min="1" max="100" defaultValue="1"/>
                    <div className="layout-description__add-cart add-cart">
                        <div className="add-cart__price">Price:
		  					<span className="price">{description.price}</span>
		  				</div>
                        <Link className="add-cart__btn" id="addCart" to='/Cart'>
                            Add to cart
                        </Link>
                    </div>
                    <div className="layout-description__lineSocial lineSocial">
                        <a className="lineSocial__twitter lineSocial__line-social" href=""></a>
                        <a className="lineSocial__vkontakte lineSocial__line-social" href=""></a>
                        <a className="lineSocial__facebook lineSocial__line-social" href=""></a>
                        <a className="lineSocial__instagram lineSocial__line-social" href=""></a>
                    </div>
                </div>
      );
    });
    return (
        <div className="page">
            <div className="page__header"> 
                <Header />
            </div>
            <div className="page__content"> 
                <article className="content">
                    <div className="content-description description">
                        <Breadcrumb breadcrumb = {this.state.description} />
                        <SliderTemplate slider = {this.state.description} />
                        {description}
                    </div>
                </article>
            </div>
            <div className="page__footer"> 
                <Footer />
            </div>
        </div>
    );
    }
})
export {ProductDescriptionTemplate}