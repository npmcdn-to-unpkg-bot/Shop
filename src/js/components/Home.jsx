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
        <article className="content">
          <ul className="content__categories categories" id="tab-content">
            {homePage}
           </ul>
        </article>
    );
    }
})
export {HomePageTemplate}