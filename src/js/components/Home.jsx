import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { Dispatcher} from 'Dispatcher.jsx'

import {categories} from 'HomeStore.jsx'
var HomePageTemplate = React.createClass({
    getInitialState: function(){
        return {categories: []}
    },
    componentDidMount: function(){
        Dispatcher.on('update-categories', this.update);
        Dispatcher.emit('get-categories');
    },
    componentWillUnMount: function(){
        Dispatcher.off('update-categories', this.update);
    },    
    update: function(data){
        this.setState({categories: data})
    },
    render: function () {   
    var categories = this.state.categories.map(function(category, key) {
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
                        {categories}
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