
var homePageElement=[
    {name: 'Motherboard'}, {name: 'CPU'},
    {name: 'RAM'},{name: 'VideoAdapter'},
    {name: 'HDD'},{name: 'PowerSource'},
    {name: 'Cooling'}];
function addCategories(arr){
      var  k=homePageElement.length;
    for (var i=0; i<k; i++){
        var name = homePageElement[i].name,
        img = homePageElement[i].img;
        var newElement = document.getElementById('tab-content');
        var newLi = document.createElement('li');
        newLi.className = ("tab-content__layoutCategories");
        newLi.innerHTML = 
        '<a class="Categories '+ name +'" href="'+name+'.html">\
        <figure>\
            <div class="img'+name+'"></div>\
            <figcaption>'+name+'</figcaption>\
        </figure>\
        </a>';
        newElement.appendChild(newLi);
    }
}
addCategories(homePageElement);
addCategories(homePageElement);
addCategories(homePageElement);
addCategories(homePageElement);
addCategories(homePageElement);
addCategories(homePageElement);
