var motherboardPageElement = [
    {name: 'GIGABYTE GA-78LMT-S2', price: '$ 555'}, {name: 'GIGABYTE GA-990FXA-UD5', price: '$ 655'}, {name: 'GIGABYTE GA-B85-HD3', price: '$ 700'},
    {name: 'GIGABYTE GA-H81M-S2PV', price: '$ 900'}
];

function addElementPageitem (arr) {    
    var newElement = document.getElementById ('tab-content');    
    for (var i = 0; i < arr.length * 4; i++) {        
        var img = i % 4 + 1; 
		
        var li = document.createElement('li');
        li.setAttribute("class", "tab-content__layoutitems");
		newElement.appendChild(li);
		
        var a = document.createElement('a');
        a.setAttribute("class", "Categories pages__items");
        a.setAttribute("href", "productdescription.html");
		li.appendChild(a);
		
        var figure = document.createElement('figure');
        figure.setAttribute  ("class", "elementspagefigure");
		a.appendChild(figure);
		
		
        var div = document.createElement('div');         
        div.setAttribute("class", "elementspagelink__img elementspagelink__img--img" + img);	
		figure.appendChild(div);
		
        var figcaption = document.createElement('figcaption');
        figcaption.setAttribute("class", "elementspage__figcaption");
		figure.appendChild(figcaption);
		
        var textName = arr[i%4].name;
		
		var br = document.createElement('br');
		
		var textPrice = arr[i%4].price;		
		
		figcaption.appendChild(document.createTextNode(textName));
		figcaption.appendChild(br);
		figcaption.appendChild(document.createTextNode(textPrice));       
    }
}

addElementPageitem(motherboardPageElement);