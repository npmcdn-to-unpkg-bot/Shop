import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'
import {CartItem} from 'locStorage.jsx'
	
var CartTemplate = React.createClass ({
	
	getInitialState: function () {
		return {
			cartitem: []        	
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
		console.log (data);
	},
	
	render: function () {		
		return (
			<div className="cart__section" id="cartpage__item">
			<div className="cart__item">				
					<div className="itemscart__cellview">
						<div className="itemscart__boximg">
							<a className="itemscart__imglink itemscart__imglink--style" href="productdescription.html">
								<div className="imgitemcart img1">
								</div>
							</a>
						</div>
						<div className="itemscart__description">
							<div className="itemscart__linkprop itemscart__linkprop--style">
								<a className="itemscart__link" href="productdescription.html">
									{'Privet'}
								</a>
							</div>
							<div className="itemscart__description-count">
								<div className="cart-options">
									<div className="cart-quant">
										Quantity
									</div>
									<div className="cart-input">
										<input className="cart-input__value" type="number" min="1" max="200" defaultValue="1" name="quality" />
									</div>
									<div className="cart-priceview">
										$ 500
									</div>
								</div>			
								<div className="itemremove">
									<input className="remove-item" type="button" value="Remove" name="remove" />
								</div>
							</div>
						</div>
					</div>				
			</div>
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
		);
	}
});
export {CartTemplate}