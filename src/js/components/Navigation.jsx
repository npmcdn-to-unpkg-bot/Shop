var Navigation = React.createClass ({
	
	render: function () {
		return (
		  <nav className="page__navbar page__navbar--desktop">
       	  	<a className="page__navbar__link page__navbar__link--active" href="#Motherboard">
              <div className="page__navbar__img page__navbar__img--mother"></div>
            <span className="caption">Motherboard</span>
        	</a> 
    
        	<a className="page__navbar__link" href="CPU.html">
              <div className="page__navbar__img page__navbar__img--cpu"></div>
			<span className="caption">CPU</span>
        	</a> 
    
        	<a className="page__navbar__link" href="RAM.html">
              <div className="page__navbar__img page__navbar__img--ram"></div>
			<span className="caption">RAM</span>
        	</a> 
    
        	<a className="page__navbar__link" href="videoAdapter.html">
              <div className="page__navbar__img page__navbar__img--video"></div>
			<span className="caption">Video adapter</span>
        	</a> 
    
        	<a className="page__navbar__link" href="HDD.html">
              <div className="page__navbar__img page__navbar__img--hdd"></div>
			<span className="caption">HDD</span>
        	</a>
    
        	<a className="page__navbar__link" href="powerSource.html">
              <div className="page__navbar__img page__navbar__img--power"></div>
			<span className="caption">Power source</span>
        	</a> 
    
        	<a className="page__navbar__link" href="cooling.html">
              <div className="page__navbar__img page__navbar__img--cooling"></div>
			<span className="caption">Cooling</span>
        	</a>  		 
    	  </nav>
		);
	}

})