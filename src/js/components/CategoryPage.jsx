var CategoryPage = React.createClass({
  getDefaultProps: function () {
    return {
      categories: [
        {name:'GIGABYTE-GA-78LMT-S2', img:'elementspagelink__img--img1', price:'$ 555', link:'#GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S3', img:'elementspagelink__img--img2', price:'$ 655', link:'#GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S4', img:'elementspagelink__img--img3', price:'$ 700', link:'#GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S5', img:'elementspagelink__img--img4', price:'$ 900', link:'#GIGABYTE-GA-78LMT-S2'}     
      ],
    }
  },

  render: function () {
    return (
		<div className="newv__page">	
			<div className="page__header">
				<Header />
			</div>
			
				<Navigation />
			
				<article className="newv__elementspage newv__elementspage--style">        
			  		<div className="newv__viewmode">
						<a className="newv__elementspagelink" href="MotherboardList.html">
						List View
						</a>
			  		</div>          
			  		<ItemsList categories={this.props.categories} />		
				</article>		
			<Footer />
		</div>		
    );
  }
})