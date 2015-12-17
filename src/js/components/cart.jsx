import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {Dispatcher} from 'Dispatcher.jsx'
import {CartItem} from 'locStorage.jsx'
	
var Cart = React.createClass ({
	
	getInitialState: function () {
		return {
			cartitem: [],
			price: []
        };
  	},
	
	componentDidMount: function () {		
		Dispatcher.on('update-CartItem', this.update);
		Dispatcher.emit('get-CartItem');		
    },
	
	componentWillUnmount: function () {
		Dispatcher.off('update-CartItem', this.update);
	},
	
	update: function (data) {
		var arr = [];
		var sum = 0;
		for	(var i = 0; i < data.length; i++) {
			if (data[i] != 'undefined') {
				arr.push (data[i].split(';'));
			}
		}
		this.setState({cartitem: arr});
	},
	
	render: function () {
		var cartitem = this.state.cartitem.map(function (item, key) {
			return (
				<div className="cart__item" key = {key}>				
					<div className="itemscart__cellview">
						<div className="itemscart__boximg">
							<a className="itemscart__imglink itemscart__imglink--style" href="productdescription.html">
								<div>
									<img className="imgitemcart" src={item[0]} />
								</div>
							</a>
						</div>
						<div className="itemscart__description">
							<div className="itemscart__linkprop itemscart__linkprop--style">
								<a className="itemscart__link" href="productdescription.html">
									{item[1]}
								</a>
							</div>
							<div className="itemscart__description-count">
								<div className="cart-options">
									<div className="cart-quant">
										Quantity
									</div>
									<div className="cart-input">
										<input className="cart-input__value" type="number" min="1" max="200" defaultValue={item[2]} name="quality" />	
									</div>
									<div className="cart-priceview">
										{item[3]}
									</div>
								</div>			
								<div className="itemremove">
									<input className="remove-item" type="button" value="Remove" name="remove" />
								</div>
							</div>
						</div>
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
					<div className="cart">
						<div className="cart__section" id="cartpage__item">
							
							{cartitem}
			
							<div className="cartpage__carttotal">
								<div className="totalpricetable">
									Total: $ 500
								</div>
								<div className="paytable">
									<Link className="totalbar__link" to="/Cart/Addres">
										<div className="tocheckout">
											Proceed to Checkout
										</div>
									</Link>
								</div>
								<div className="paytable">
									<Link className="totalbar__link" to="/">
										<div className="tocheckout">
											Continue Shopping
										</div>
									</Link>
								</div>
							</div>
						</div>			
						<div className="cart__totalbar">
							<div className="totalbar__title">
								Basket Summary
							</div>
							<div className="totalbar__countitems">
								(1 items)
							</div>
							<hr size="4" width="85%" color="black" />
							<div className="totalbar__price">
								$ 500
							</div>
							<div className="totalbar__pay">
								<Link className="totalbar__link" to="/Cart/Addres">
									<div className="tocheckout">Proceed to Checkout</div>
								</Link>
							</div>
						</div>
					</div>
                </div>
											
                <div className="page__footer">
				    <Footer />
                </div>
											
			</div>
		);
	}
});
export {Cart}