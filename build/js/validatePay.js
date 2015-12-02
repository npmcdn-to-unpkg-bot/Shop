$(document).ready(function(){

    $("#payForm").validate({
       rules:{

            card1:{
                required: true,
                minlength: 4,
                maxlength: 4,
            },            
           card2:{
                required: true,
                minlength: 4,
                maxlength: 4,
            },            
           card3:{
                required: true,
                minlength: 4,
                maxlength: 4,
            },            
           card4:{
                required: true,
                minlength: 4,
                maxlength: 4,
            },

       },

       messages:{

            card1:{
                required: "Это поле обязательно для заполнения",
                minlength: "Поле номер карты должно быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },            
           card2:{
                required: "Это поле обязательно для заполнения",
                minlength: "Поле номер карты должно быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },            
           card3:{
                required: "Это поле обязательно для заполнения",
                minlength: "Поле номер карты должно быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },            
           card4:{
                required: "Это поле обязательно для заполнения",
                minlength: "Поле номер карты должно быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },

       }

    });

});
$(document).ready(function() {
            //Feedback form
            if ($('div').hasClass('form')) {
                $("#feedback_form").validate({
                    rules: {
                        fio: "required",
                        mail: {
                            required: true,
                            email: true
                        }
                    },
                    errorPlacement: function(error, element) {
                        element.parent().addClass('error_block');
                        error.insertAfter(element);
                    }
                });
            }
            $('#feedback_form input:text').focus(function () {
                $(this).parent().addClass('focus');
            });
            $('#feedback_form input:text').blur(function () {
                if ($(this).parent().hasClass('focus')) {
                    $(this).parent().removeClass('focus');
                }
            });
            $('#feedback_form textarea').focus(function () {
                $(this).parent().addClass('focus1');
            });
            $('#feedback_form textarea').blur(function () {
                if ($(this).parent().hasClass('focus1')) {
                    $(this).parent().removeClass('focus1');
                }
            });
            //Clear form
            $('.clear').click(function() {
                $(this).parent().parent().find('input, textarea').attr('value', '');
            });
        });

