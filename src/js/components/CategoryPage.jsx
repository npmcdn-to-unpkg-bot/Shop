var CategoryPage = React.createClass({
  getDefaultProps: function () {
    return {
      categories: [
        {name:'GIGABYTE-GA-78LMT-S2', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg', price:'$ 555', link:'GIGABYTE-GA-78LMT-S2.html'}, 
		{name:'GIGABYTE-GA-78LMT-S3', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg', price:'$ 655', link:'GIGABYTE-GA-78LMT-S2.html'}, 
		{name:'GIGABYTE-GA-78LMT-S4', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-B85-HD3.jpg', price:'$ 700', link:'GIGABYTE-GA-78LMT-S2.html'}, 
		{name:'GIGABYTE-GA-78LMT-S5', img:'../img/motherboard/Gigabyte/GIGABYTE%20GA-H81M-S2PV.jpg', price:'$ 900', link:'GIGABYTE-GA-78LMT-S2.html'}     
      ],
    }
  },

  render: function () {
    return (
      <div className="wrapper">       
        <Header />  
		<Navigation />
		<article className="elementspage elementspage--style">        
          <div className="viewmode">
            <a className="elementspagelink" href="MotherboardList.html">
                List View
            </a>
          </div>          
		  <ItemsList categories={this.props.categories} />          
        </article>
     </div>
    );
  }
})