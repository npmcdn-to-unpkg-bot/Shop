var itemsCart = [
	{name: 'AMD A8-7600 OEM', price:'$ 500'}
];

function renderCart (arr) {
	for	(var i = 0; i < arr.length * 6; i++) {
		var main = document.createElement('div');
		main.setAttribute("class", "cartpage__cart");
		
		var main__value = document.createElement('div');
		main__value.setAttribute("class", "itemscart");
		main.appendChild(main__value);
		
		var element = document.createElement('div');
		element.setAttribute("class", "itemscart__cellview");
		main__value.appendChild(element);
		
		var boxImg = document.createElement('div');
		boxImg.setAttribute("class", "itemscart__boximg");
		element.appendChild(boxImg);
		
		var link = document.createElement ('a');
		link.setAttribute("class", "itemscart__imglink itemscart__imglink--style");
		link.setAttribute("href", "productdescription.html");
		boxImg.appendChild(link);
		
		var img = document.createElement('div');
		img.setAttribute("class", "imgitemtable img"+1);
		link.appendChild(img);
		
		var description = document.createElement('div');
		description.setAttribute("class", "descriptionitem");
		element.appendChild(description);
		
		var nameBox = document.createElement('div');
		nameBox.setAttribute("class", "linkproperties__cart linkproperties__cart--style");
		description.appendChild(nameBox);
		
		var nameLink = document.createElement('a');
		nameLink.setAttribute("class", "elementspagelink elementspagelink--style");
		nameLink.setAttribute("href", "productdescription.html");		
		nameLink.appendChild(document.createTextNode('AMD A8-7600 OEM'));		
		nameBox.appendChild(nameLink);
		
		var description__count = document.createElement('div');
		description__count.setAttribute("class", "descriptionitem__count");
		description.appendChild(description__count);
		
		var quantity = document.createElement('div');
		quantity.setAttribute("class", "cartquant");
		quantity.appendChild(document.createTextNode('Quantity'));
		description__count.appendChild(quantity);
		
		var counter = document.createElement('div');
		counter.setAttribute("class", "cartinput");
		description__count.appendChild(counter);
		
		var counter__input = document.createElement('input');
		counter__input.setAttribute("type", "number");
		counter__input.setAttribute("min", "1");
		counter__input.setAttribute("max", "200");
		counter__input.setAttribute("value", "1");
		counter__input.setAttribute("name", "quality");
		counter.appendChild(counter__input);
		
		var price = document.createElement('div');
		price.setAttribute("class", "cartpriceview");
		price.appendChild(document.createTextNode('$ 500'));
		description__count.appendChild(price);
		
		var remove = document.createElement('div');
		remove.setAttribute("class", "itemsremove");
		description__count.appendChild(remove);
		
		var remove__button = document.createElement('input');
		remove__button.setAttribute("type", "button");
		remove__button.setAttribute("value", "Remove");
		remove__button.setAttribute("name", "remove");
		remove.appendChild(remove__button);		
		
		document.getElementById('cartpage__item').appendChild(main);
	}
	
	var cartTotal = document.createElement('div');
	cartTotal.setAttribute("class", "cartpage__carttotal");
	document.getElementById('cartpage__item').appendChild(cartTotal);
	
	var totalPrice = document.createElement('div');
	totalPrice.setAttribute("class", "totalpricetable");
	totalPrice.appendChild(document.createTextNode('Total: $ 3000'));
	cartTotal.appendChild(totalPrice);
	
	var continuePay = document.createElement('div');
	continuePay.setAttribute("class", "paytable");
	cartTotal.appendChild(continuePay);
	
	var totalLink = document.createElement('a');
	totalLink.setAttribute("class", "totalbar__link");
	totalLink.setAttribute("href", "AddressPage.html");
	continuePay.appendChild(totalLink);
	
	var totalCheck = document.createElement('div');
	totalCheck.setAttribute("class", "tocheckout");
	totalCheck.appendChild(document.createTextNode('Proceed to Checkout'));
	totalLink.appendChild(totalCheck);	
		
	var back = document.createElement('div');
	back.setAttribute("class", "paytable");
	cartTotal.appendChild(back);
	
	var backLink = document.createElement('a');
	backLink.setAttribute("class", "totalbar__link");
	backLink.setAttribute("href", "index.html");
	back.appendChild(backLink);
	
	var backCheck = document.createElement('div');
	backCheck.setAttribute("class", "tocheckout");
	backCheck.appendChild(document.createTextNode('Continue Shopping'));
	backLink.appendChild(backCheck);
		
}

renderCart(itemsCart);