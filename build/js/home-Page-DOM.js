//Make an object model for pages (at least one)
//* categories
//* wares
//* cart
//
//Place initial data to js as an array of objects
//
//Add js script on page load, which shoud:
//* take initial data model
//* find root DOM node to place model data (by ID)
//* iterate throw data model array and build child DOM nodes
//* insert builded nodes to root childs

var homePageElement=[
    {name: 'Motherboard'}, {name: 'CPU'}, {name: 'RAM'},{name: 'VideoAdapter'},{name: 'HDD'},{name: 'PowerSource'},{name: 'Cooling'}],
        k=homePageElement.length;
function addCategories(){
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