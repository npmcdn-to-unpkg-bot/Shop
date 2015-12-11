import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'

var Finish = React.createClass ({
	render: function () {
		return (
            <div className="page">
			     <div className="page__header">
					<Header />
				 </div>
				 <div className="page__content">
                     <article className="content">
                        <h1>Благодарим за покупку!</h1>
                     </article>
                 </div>
			     <div className="page__footer">
				    <Footer />
                </div>
            </div>
		);
	}
})
export {Finish}