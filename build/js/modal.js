    $(document).on('click', '.header__element--authorization',  function(){
        $('#page').prepend("<div id='openModal' class='wrapper__modal-dialog'></div><form class='modal-dialog__login-form login-form'><a class='login-form__close'>X</a><p class='login-form__header'>Please Sign In</p>Email<input class='login-form__email login-form__input' type='email' placeholder='Email address'><br>Password<input class='login-form__password login-form__input' type='password' placeholder='***********'><br><input class='login-form__remember-me login-form__input' type='checkbox' value='remember'> Remember me<br><input class='login-form__sign-in login-form__input' type='submit' value='Sign In'><br><a class='login-form__register' href='register.html'>Register</a></form>");
        $('.wrapper__modal-dialog').click(function(){
        $('.wrapper__modal-dialog').remove();
        $('.modal-dialog__login-form').remove();
        });
        }); 