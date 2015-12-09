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
                </div>
											
                <div className="page__footer">
				    <Footer />
                </div>
											
			</div>
		);
	}
});
export {Cart}