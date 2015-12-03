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