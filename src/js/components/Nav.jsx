var Navigation = React.createClass ({
  render: function () {
	  return (
		<nav class="navbar navbar--desktop">
          <a class="navbar__link navbar__link--active" href="Motherboard.html">
            <div class="navbar__img navbar__img--mother"></div>
            Motherboard
          </a> 
    
          <a class="navbar__link" href="CPU.html">
             <div class="navbar__img navbar__img--cpu"></div>CPU
          </a> 
    
          <a class="navbar__link" href="RAM.html">
            <div class="navbar__img navbar__img--ram"></div>RAM
          </a> 
    
          <a class="navbar__link" href="videoAdapter.html">
            <div class="navbar__img navbar__img--video"></div>Video adapter
          </a> 
    
          <a class="navbar__link" href="HDD.html">
            <div class="navbar__img navbar__img--hdd"></div>HDD
          </a>
    
          <a class="navbar__link" href="powerSource.html">
             <div class="navbar__img navbar__img--power"></div>Power source
          </a>    
          <a class="navbar__link" href="cooling.html">
            <div class="navbar__img navbar__img--cooling"></div>Cooling
          </a>   
    	</nav>  
	  );
  }
})