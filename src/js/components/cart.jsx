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
					<div className="cartpage__totalbar totalbar">
            			<div className="totalbar__title">
                			Basket Summary
            			</div>
            			<div className="totalbar__countitems">
                			(6 items)
            			</div>
            			<hr size="4" width="85%" color="black" />
            			<div className="totalbar__price">
                			$ 3000
            			</div>
            			<div className="totalbar__pay">
                			<a className="totalbar__link" href="AddressPage.html">
                    			<div className="tocheckout">Proceed to Checkout</div>
                			</a>
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