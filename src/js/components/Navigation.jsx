var Navigation = React.createClass ({
	
	render: function () {
        var nav = this.props.nav.map(function(category, key) {
		return (

       	  	<a className="page__navbar__link" href={category.href}>
              <div className={"page__navbar__img page__navbar__img--" + category.img}></div>
            <span className="caption">{category.name}</span>
        	</a> 
    	
     );
    });	
	  return (
		<div className="page__menu">
            <nav className="page__navbar page__navbar--desktop">
		  {nav}
            </nav>
        </div>		
	  );
    }
})