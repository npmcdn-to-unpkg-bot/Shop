var HomePageTemplate = React.createClass({
  render: function () {    
    var homePage = this.props.homePage.map(function(homePage, key) {
      return (
        <ul className="product-section__tab-content tab-content" id="tab-content">
            <li className="tab-content__layoutCategories" key={key}>
                <a className="Categories Motherboard" href={homePage.href}>
                    <figure>       
                        <div className={'img'+homePage.name}></div>
                        <figcaption>{homePage.name}</figcaption>
                    </figure>
                </a>
            </li>
        </ul>
                );
    });
      return (
        <div className="product-description__layout-description">
            {homePage}
        </div>
    );
    }
})
var HomePageRender = React.createClass({
    getInitialState: function(){
        return {
            currentPage: PageName.getPageName()
        }
    },
    getDefaultProps: function () {
    return {
        homePage: [
            {name: 'Motherboard', href: '/Motherboard'},
            {name: 'CPU', href: '#itemList'},
            {name: 'RAM', href: '#itemList'},
            {name: 'VideoAdapter', href: '#itemList'},
            {name: 'HDD', href: '#itemList'},
            {name: 'PowerSource', href: '#itemList'},
            {name: 'Cooling', href: '#itemList'}
        ]
    }
  },
render: function () {
    return (
    <div>
        <Header/>
        <HomePageTemplate homePage={this.props.homePage} /> 
        <Footer />
    </div>
    );
  }
})