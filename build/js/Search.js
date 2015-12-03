$(document).ready(function(){
$(document).on('keydown','.all__header__elements--search',function(){
    var inputSearch = $('.all__header__elements--search').val();
    var search = $('.newv__elementspage__figcaption span').val();
   console.log(inputSearch);
    console.log(search);
});
});