$(document).ready(function(){
var arr= [
        {
        name:'GIGABYTE-GA-78LMT-S2',
        link:'/GIGABYTE-GA-78LMT-S2'},
        {
        name:'GIGABYTE-GA-78LMT-S3',
        link:'/GIGABYTE-GA-78LMT-S3'}, 
		{
        name:'GIGABYTE-GA-LT-S4',
        link:'/GIGABYTE-GA-78LMT-S4'}, 
		{
        name:'GIGABYTE-GA-78LMT-S5',
        link:'/GIGABYTE-GA-78LMT-S'}
];

    $('#page').on('keyup', '.header__element--search', function(){
        var inputSearch = $('.header__element--search').val();
        $('.resultSearch').hide(100,function(){$('.resultSearch').remove()})
        $(".header-element__search").append("<ul class='resultSearch'></ul>");
        var i = arr.length;
        for (var k=0; k<i; k++){
            var j = arr[k].name.toLowerCase().indexOf(inputSearch.toLowerCase());
            if (j>0){
            var search = arr[k].name
            $('.resultSearch').append("<li class='searchLink'><a href="+"#/Categories/Motherboard"+ arr[k].link+" class='item'>"+search+"</a></li>");
                $('.searchLink').show(200);
;
            }
        };        
    });
    });
