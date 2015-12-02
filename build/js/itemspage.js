var motherboardPageElement = [
    {href:'GIGABYTE-GA-78LMT-S2.html', name: 'GIGABYTE GA-78LMT-S2', price: '$ 555'},
    {href:'GIGABYTE-GA-78LMT-S3.html',name: 'GIGABYTE GA-990FXA-UD5', price: '$ 655'},
    {href:'GIGABYTE-GA-78LMT-S4.html',name: 'GIGABYTE GA-B85-HD3', price: '$ 700'},
    {href:'GIGABYTE-GA-78LMT-S5.html',name: 'GIGABYTE GA-H81M-S2PV', price: '$ 900'}
];

function addElementPageitem (arr) {    
    var newElement = document.getElementById ('tab-content');    
    for (var i = 0; i < arr.length; i++) {        
        var img = i + 1; 
		
        var li = document.createElement('li');
        li.setAttribute("class", "tab-content__layoutitems");		
		
        var a = document.createElement('a');
        a.setAttribute("class", "Categories pages__items");
        a.setAttribute("href", arr[i].href);		
		
        var figure = document.createElement('figure');
        figure.setAttribute  ("class", "elementspagefigure");		
		
        var div = document.createElement('div');         
        div.setAttribute("class", "elementspagelink__img elementspagelink__img--img" + img);		
		
        var figcaption = document.createElement('figcaption');
        figcaption.setAttribute("class", "elementspage__figcaption");		
		
        var textName = arr[i].name;
		
		var br = document.createElement('br');
		
		var textPrice = arr[i].price;		
		
		figcaption.appendChild(document.createTextNode(textName));
		figcaption.appendChild(br);
		figcaption.appendChild(document.createTextNode(textPrice));
		figure.appendChild(div);
		figure.appendChild(figcaption);		
		a.appendChild(figure);
		li.appendChild(a);
		newElement.appendChild(li);
    }
}
function render(mass){
    var valueRender = 1;
    for (var k=0; k<valueRender; k++){
        addElementPageitem(mass);
    }
}

render(motherboardPageElement);