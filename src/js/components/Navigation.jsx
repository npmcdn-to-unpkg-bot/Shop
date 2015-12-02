var Navigation = React.createClass ({
	
	render: function () {
		return (
		  <nav className="page__navbar page__navbar--desktop">
       	  	<a className="page__navbar__link page__navbar__link--active" href="Motherboard.html">
              <div className="page__navbar__img page__navbar__img--mother"></div>
            Motherboard
        	</a> 
    
        	<a className="page__navbar__link" href="CPU.html">
              <div className="page__navbar__img page__navbar__img--cpu"></div>CPU
        	</a> 
    
        	<a className="page__navbar__link" href="RAM.html">
              <div className="page__navbar__img page__navbar__img--ram"></div>RAM
        	</a> 
    
        	<a className="page__navbar__link" href="videoAdapter.html">
              <div className="page__navbar__img page__navbar__img--video"></div>Video adapter
        	</a> 
    
        	<a className="page__navbar__link" href="HDD.html">
              <div className="page__navbar__img page__navbar__img--hdd"></div>HDD
        	</a>
    
        	<a className="page__navbar__link" href="powerSource.html">
              <div className="page__navbar__img page__navbar__img--power"></div>Power source
        	</a> 
    
        	<a className="page__navbar__link" href="cooling.html">
              <div className="page__navbar__img page__navbar__img--cooling"></div>Cooling
        	</a>  		 
    	  </nav>
		);
	}
})