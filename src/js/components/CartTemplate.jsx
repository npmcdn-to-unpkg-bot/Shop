import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
	
var CartTemplate = React.createClass ({
	render: function () {
		/*var cart = this.props.cart.map(function(cart, key) {
			return (
			
			)				
		});*/
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
							<div className="linkprop__cart linkprop__cart--style">
								<a className="elementspagelink elementspagelink--style" href="productdescription.html">
									AMD A8-7600 OEM
								</a>
							</div>
							<div className="itemscart__description-count">
								<div className="cartquant">
									Quantity
								</div>
								<div className="cartinput">
									<input type="number" min="1" max="200" value="1" name="quality" />
								</div>
								<div className="cartpriceview">
									$ 500
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
					<a className="cart-totalbar__link" href="AddressPage.html">
						<div className="tocheckout">
							Proceed to Checkout
						</div>
					</a>
				</div>
				<div className="paytable">
					<a className="cart-totalbar__link" href="index.html">
						<div className="tocheckout">
							Continue Shopping
						</div>
					</a>
				</div>
			</div>
			</div>
		);
	}
});
export {CartTemplate}