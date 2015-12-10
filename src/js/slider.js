$(document).ready(function(){
    var border;
    var imgSlider = [
        'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
        'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
        'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
        'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
        'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',  
        ]
    var k=0;
    var attr;

    $(document).on('click', '.slider-img__big-img.big-img',  function(){
        attr = $('.slider-img__big-img.big-img img').attr('src');
        $('body').append("<div class='wrapper__modal-dialog'><img src="+attr+" class='fancybox' /></div>");
        $('.wrapper__modal-dialog').click(function(){
        $('.wrapper__modal-dialog').css("display", "none");
        });
        }); 


    $(document).on('click', 'div.slider-img .min-img--style',  function(){
        $('.slider-img__min-img img').css("border", "none");
        var slider = $('div.slider-img .min-img--style');
        attr = $(this).closest(slider).attr('src');
        border = $(this).closest(slider);
        $(border).css("border", "1px solid blue");
        $('img.big-img__positioner').attr('src', attr);  
        for (var q = 0; q< imgSlider.length-1; q++){
            if (attr == imgSlider[q]){
                k=q;
                break;
            }
        }
    }); 
    $(document).on('click', '.min-img__arrow--left',  function(){  
        $('.slider-img__min-img img').css("border", "none");
        k--;
        if (k<0) {
            k = imgSlider.length - 1;
        } 
        var c = k+2;
        border = $('.slider-img__min-img img:nth-child('+c+')');
        $(border).css("border", "1px solid blue");
        $('img.big-img__positioner').attr('src', imgSlider[k]);
        });
    $(document).on('click', '.min-img__arrow--right',  function(){  
        console.log(k);
        $('.slider-img__min-img img').css("border", "none");
        k++;
        if (k>imgSlider.length-1) {
            k = 0;
        } 
        var c = k+2;
        border = $('.slider-img__min-img img:nth-child('+c+')');
        $(border).css("border", "1px solid blue");
        $('img.big-img__positioner').attr('src', imgSlider[k]);  
        });
});