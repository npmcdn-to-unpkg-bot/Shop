import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
	
var Addres = React.createClass({
	render: function () {
		return (
			<div className="page">
			
				<div className="page__header">
					<Header />
				</div>
			
				<div className="page__content">
					<div className="content-addres">
						<div className="addres">
							<div className="tab-content__layoutadd">
								<h1 className="titleadd--style">Shipping address</h1>
								<div className="addressinfo">
									<div className="addressinfo__text">Country</div>
										<input list="addressinfo__add"/>
											<datalist id="addressinfo__add">
												<option value="Australia"/>
												<option value="Chaina"/>
												<option value="England"/>
												<option value="France"/>
												<option value="Russia"/>
												<option value="Spain"/>
												<option value="USA"/>
											</datalist>
									</div>  
								<div className="addressinfo">
									<div className="addressinfo__text">City</div>
									<input type="text"/>
								</div>
								<div className="addressinfo">
									<div className="addressinfo__text">Address</div>
									<input type="text"/>
								</div>
								<div className="addressinfo">
									<div className="addressinfo__text">ZIP</div>
									<input type="text"/>
								</div>
							</div>
							<div className="tab-content__layoutadd">
								<h1 className="titleadd--style">Billing address</h1>
								<div className="addressinfo">
									<div className="addressinfo__text">Country</div>
									<input list="addressinfo__add"/>
									<datalist id="addressinfo__add">
										<option value="Australia"/>
										<option value="Chaina"/>
										<option value="England"/>
										<option value="France"/>
										<option value="Russia"/>
										<option value="Spain"/>
										<option value="USA"/>
									</datalist>
								</div>  
								<div className="addressinfo">
									<div className="addressinfo__text">City</div>
									<input type="text"/>
								</div>
								<div className="addressinfo">
									<div className="addressinfo__text">Address</div>
									<input type="text"/>
								</div>
								<div className="addressinfo">
									<div className="addressinfo__text">ZIP</div>
									<input type="text"/>
								</div>
								<p className="addcheck">
									<input type="checkbox" name="save"/>
									My billing addres is the same
								</p>           
							</div>
						</div>
						<div className="buttonAdd">
							<Link className="finish-btn" to="/Cart/Addres/Pay">To pay</Link>
						</div>
					</div>
				</div>
			
				<div className="page__footer">
				    <Footer />
                </div>			
			</div>
		)
	}
});
export {Addres}