var CategoryPage = React.createClass({
  getDefaultProps: function () {
    return {
      categories: [
        {name:'GIGABYTE-GA-78LMT-S2', img:'elementspagelink__img--img1', price:'$ 555', link:'GIGABYTE-GA-78LMT-S2.html'}, 
		{name:'GIGABYTE-GA-78LMT-S3', img:'elementspagelink__img--img2', price:'$ 655', link:'GIGABYTE-GA-78LMT-S2.html'}, 
		{name:'GIGABYTE-GA-78LMT-S4', img:'elementspagelink__img--img3', price:'$ 700', link:'GIGABYTE-GA-78LMT-S2.html'}, 
		{name:'GIGABYTE-GA-78LMT-S5', img:'elementspagelink__img--img4', price:'$ 900', link:'GIGABYTE-GA-78LMT-S2.html'}     
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