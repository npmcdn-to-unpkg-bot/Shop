$(document).ready(function(){
    $(document).on('click', 'div.slider-img .min-img--style',  function(){
        var slider = $('div.slider-img .min-img--style');
        var attr = $(this).closest(slider).attr('src');
        $('img.big-img__positioner').attr('src', attr)
    });
});