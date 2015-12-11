import {Link} from 'react-router'
var Pay = React.createClass ({
	render: function () {
		return (
<form className="orderForm" id="payForm">
                <div className="line1">
                    <input type="text" autofocus="on" maxlength="4" tabindex="1" name="card1" />
                    <input type="text" autofocus="off" maxlength="4" tabindex="2" name="card2" />
                    <input type="text" autofocus="off" maxlength="4" tabindex="3" name="card3" />
                    <input type="text" autofocus="off" maxlength="4" tabindex="4" name="card4" />
                </div>    
                <span className="lineValid">Month</span><span className="lineValid">Year</span>
                <div className="line2" >
                    <select className="month" tabindex="5">
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
                    <select className="year" tabindex="6">
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
                <div className="line3">
                        <input type="text" autofocus="off" maxlength="22" placeholder="Name" tabindex="7" />
                </div>
                <div className="line4">
                        <input type="text" autofocus="off" maxlength="3" placeholder="CVC" tabindex="8" />
                </div>
                <div className="line5">
              <button  className="btn btn-primary pull-right continuePaymentProcess finish-btn" type="submit">Pay</button>
                     <Link className="finish-btn" to="finishPage.html">Pay</Link>
                </div>
                    </form>
        )
    }
});
export {Pay}