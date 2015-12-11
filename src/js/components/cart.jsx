import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {Description} from 'DescriptionPage.jsx'
import {CartTemplate} from 'CartTemplate.jsx'
var Cart = React.createClass ({	
	render: function () {
		return (
			<div className="page">
			
				<div className="page__header">
					<Header />
				</div>
			
                <div className="page__content">			
					<CartTemplate />
					<div className="cart-totalbar">
            			<div className="cart-totalbar__title">
                			Basket Summary
            			</div>
            			<div className="cart-totalbar__countitems">
                			(1 items)
            			</div>
            			<hr size="4" width="85%" color="black" />
            			<div className="cart-totalbar__price">
                			$ 500
            			</div>
            			<div className="cart-totalbar__pay">
                			<Link className="cart-totalbar__link" to="/Cart/Addres">
                    			<div className="tocheckout">Proceed to Checkout</div>
                			</Link>
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