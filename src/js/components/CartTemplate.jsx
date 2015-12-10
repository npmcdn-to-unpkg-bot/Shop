import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
	
var CartTemplate = React.createClass ({
	render: function () {
		/*var cart = this.props.cart.map(function(cart, key) {
			return (
			
			)				
		});*/
		return (
			<div className="cartpage__section" id="cartpage__item">
			<div className="cartpage__cart">
				<div className="itemscart">
					<div className="itemscart__cellview">
						<div className="itemscart__boximg">
							<a className="itemscart__imglink itemscart__imglink--style" href="productdescription.html">
								<div className="imgitemtable img1">
								</div>
							</a>
						</div>
						<div className="descriptionitem">
							<div className="linkproperties__cart linkproperties__cart--style">
								<a className="elementspagelink elementspagelink--style" href="productdescription.html">
									AMD A8-7600 OEM
								</a>
							</div>
							<div className="descriptionitem__count">
								<div className="cartquant">
									Quantity
								</div>
								<div className="cartinput">
									<input type="number" min="1" max="200" value="1" name="quality" />
								</div>
								<div className="cartpriceview">
									$ 500
								</div>
								<div className="itemsremove">
									<input type="button" value="Remove" name="remove" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cartpage__carttotal">
				<div className="totalpricetable">
					Total: $ 3000
				</div>
				<div className="paytable">
					<a className="totalbar__link" href="AddressPage.html">
						<div className="tocheckout">
							Proceed to Checkout
						</div>
					</a>
				</div>
				<div className="paytable">
					<a className="totalbar__link" href="index.html">
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