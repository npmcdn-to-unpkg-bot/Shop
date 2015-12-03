$(document).ready(function(){
    $(document).on('click', ':input', function(){
		var self = ':input';		
		$(this).closest('.cartpage__cart').remove();		
    });
});

