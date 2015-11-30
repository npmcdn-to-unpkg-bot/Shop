var Navigation = React.createClass ({
  render: function () {
	  return (
		<nav className="navbar navbar--desktop">
          <a className="navbar__link navbar__link--active" href="Motherboard.html">
            <div className="navbar__img navbar__img--mother"></div>
            Motherboard
          </a> 
    
          <a className="navbar__link" href="CPU.html">
             <div className="navbar__img navbar__img--cpu"></div>CPU
          </a> 
    
          <a className="navbar__link" href="RAM.html">
            <div className="navbar__img navbar__img--ram"></div>RAM
          </a> 
    
          <a className="navbar__link" href="videoAdapter.html">
            <div className="navbar__img navbar__img--video"></div>Video adapter
          </a> 
    
          <a className="navbar__link" href="HDD.html">
            <div className="navbar__img navbar__img--hdd"></div>HDD
          </a>
    
          <a className="navbar__link" href="powerSource.html">
             <div className="navbar__img navbar__img--power"></div>Power source
          </a>    
          <a className="navbar__link" href="cooling.html">
            <div className="navbar__img navbar__img--cooling"></div>Cooling
          </a>   
    	</nav>  
	  );
  }
})