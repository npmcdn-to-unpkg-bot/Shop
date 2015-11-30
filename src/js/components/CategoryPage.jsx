/*var CategoryPage = React.createClass({
  getDefaultProps: function () {
    return {
      categories: [
        {name:'Food', img:'http://fakeimg.pl/350x200/?text=food', description:'Food goods'},
        {name:'Computers', img:'http://fakeimg.pl/350x200/?text=computer', description:'Computers and peripherial'},
      ],
    }
  },

  render: function () {
    return (
      <div className="page">
        <div className="page__header">
          <Header />
        </div>
        <div className="page__content">
          <CategoryList categories={this.props.categories}/>
        </div>
      </div>
    );
  }
})*/

var CategoryPage = React.createClass ({
  getDefaultProps: function () {
    return {
	  categories: [
	    {name:'GIGABYTE GA-78LMT-S2', price:'$ 555', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg'},
		{name:'GIGABYTE GA-990FXA-UD5', price:'$ 655', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg'},
		{name:'GIGABYTE-GA-78LMT-S4', price:'$ 700', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-B85-HD3.jpg'},
		{name:'GIGABYTE-GA-78LMT-S5', price:'$ 900', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-H81M-S2PV.jpg'}
	  ]	
	}
  },
	
  render: function () {
	return (
	  <div className="wrapper">
    	<Header />
		<Navigation />
	  </div>	  
	);	  
  } 
})