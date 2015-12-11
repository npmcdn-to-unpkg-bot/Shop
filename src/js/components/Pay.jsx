import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import {Link} from 'react-router'
var Pay = React.createClass ({
	render: function () {
		return (
            <div className="page">
			     <div className="page__header">
					<Header />
				 </div>
				 <div className="page__content">
                    <div className="content">
                        <form className="content__orderForm orderForm" id="payForm">
                            <div className="orderForm__line1">
                                <input type="text" autofocus="on" maxLength="4" tabIndex="1" name="card1" />
                                <input type="text" autofocus="off" maxLength="4" tabIndex="2" name="card2" />
                                <input type="text" autofocus="off" maxLength="4" tabIndex="3" name="card3" />
                                <input type="text" autofocus="off" maxLength="4" tabIndex="4" name="card4" />
                            </div>    
                            <span className="orderForm__lineValid">Month</span><span className="lineValid">Year</span>
                            <div className="orderForm__line2" >
                                <select className="month" tabIndex="5">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <select className="orderForm__year" tabIndex="6">
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                    <option>2031</option>
                                </select>
                            </div>
                            <div className="orderForm__line3">
                                    <input type="text" autofocus="off" maxLength="22" placeholder="Name" tabIndex="7" />
                            </div>
                            <div className="orderForm__line4">
                                    <input type="text" autofocus="off" maxLength="3" placeholder="CVC" tabIndex="8" />
                            </div>
                            <div className="orderForm__line5">

                            <Link className="orderForm__finish-btn" to="/Cart/Addres/Pay/Finish">Pay</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="page__footer">
                        <Footer />
                </div>
        </div>
        )
    }
});
export {Pay}