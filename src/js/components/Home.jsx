import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
var HomePageTemplate = React.createClass({
  render: function () {    
    var homePage = this.props.homePage.map(function(category, key) {
        return (
            <li className="categories__layoutCategories" key={key}>
                <Link className="category" to={category.href} >
                    <figure>       
                        <div className={'img'+category.category}></div>
                        <figcaption>{category.category}</figcaption>
                    </figure>
                </Link>
            </li>
        );
    });
        return (
            <div className="page">
                <div className="page__header"> 
                    <Header />
                </div>
                <div className="page__content"> 
                    <article className="content">
                      <ul className="content__categories categories" id="tab-content">
                        {homePage}
                       </ul>
                    </article>
                </div>
                <div className="page__footer"> 
                    <Footer />
                </div>
            </div>
        );
    }
})
export {HomePageTemplate}