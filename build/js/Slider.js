$(document).ready(function(){
    var border;
    var k=1;
    var attr;

    $(document).on('click', '.slider-img__big-img.big-img',  function(){
        attr = $('.slider-img__big-img.big-img img').attr('src');
        $('body').append("<div class='wrapper__modal-dialog'><img src="+attr+" class='fancybox' /></div>");
        $('.wrapper__modal-dialog').click(function(){
        $('.wrapper__modal-dialog').remove();
        });
        }); 


    $(document).on('click', 'div.slider-img .min-img--style',  function(){
        $('.slider-img__min-img img').css("border", "none").css("border-radius", "none");
        var slider = $('div.slider-img .min-img--style');
        attr = $(this).closest(slider).attr('src');
        border = $(this).closest(slider);
        index = $(this).index()
        $(border).css("border", "2px solid blue").css("border-radius", "10px");
        $('img.big-img__positioner').attr('src', attr);  
            k = index;


    }); 
    $(document).on('click', '.min-img__arrow--left',  function(){  
        k--;
        $('.slider-img__min-img img').css("border", "none");
        if (k<1) {
           k = 5;
        } 
        var c = k+1;
        slider = $('.slider-img__min-img img:nth-child('+c+')');
        $(slider).css("border", "1px solid blue").css("border-radius", "10px");
        attr = $(slider).attr('src');
        $('img.big-img__positioner').attr('src', attr);
        });
    $(document).on('click', '.min-img__arrow--right',  function(){  
        $('.slider-img__min-img img').css("border", "none");
        k++;
        if (k>5) {
            k = 1;
        } 
        var c = k+1;
        slider = $('.slider-img__min-img img:nth-child('+c+')');
        $(slider).css("border", "1px solid blue").css("border-radius", "10px"); 
        attr = $(slider).attr('src');
        $('img.big-img__positioner').attr('src', attr);
        });

});