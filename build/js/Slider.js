$(document).ready(function(){
    $(document).on('click', 'div.slider-img .min-img--style',  function(){
        $(border).css("border", "4px solid blue");
        console.log(border);
        var slider = $('div.slider-img .min-img--style');
        var attr = $(this).closest(slider).attr('src');
        var border = $(this).closest(slider);
        $(border).css("border", "1px solid blue");
        $('img.big-img__positioner').attr('src', attr);
    });
});