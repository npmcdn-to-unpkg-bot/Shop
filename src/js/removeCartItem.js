$(document).ready(function(){
    $(document).on('click', '.remove-item', function(){
		var self = ':input';		
		$(this).closest('.cart__item').remove();		
    });
});

