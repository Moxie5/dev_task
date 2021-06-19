$(document).ready(function() {
    const reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    let check_email = 'hello@ab.bg';
    let check_pwd = '1234';

    //LOGIN
    $("#login").click(function(e){
        e.preventDefault();
        const email = $('#email_address').val();
        const password = $('#password').val();
        let flag = 0;
        //validate
        if(email.trim() == '' ){
            $('#email_address').addClass('is-invalid');
            flag = 1;
        }else if(email.trim() != '' && !reg.test(email)){
            alert('Please enter a valid Email address');
            $('#email_address').addClass('is-invalid');
            flag = 1;
        }else if(password.trim() == '') {
            $('#password').addClass('is-invalid');
            flag = 1;
        }
        // Check if emails match
        if(email != check_email) {
            $('#email_address').addClass('is-invalid');
            flag = 1;
        }else {
            $('#email_address').removeClass('is-invalid');
        }
        // Check if passwords match
        if(password != check_pwd) {
            $('#password').addClass('is-invalid');
            flag = 1;
        }else {
            $('#password').removeClass('is-invalid');
        }
        // Clear passowrd flied
        if(flag == 1) {
            $('#password').val('');
        }
        // If no errors Login
        if(flag == 0) {
            alert("You have logged in successfully");
            $('#password').removeClass('is-invalid');
            $('#email_address').removeClass('is-invalid');
            const data = {
                email: email,
                password: password
            };
            console.log(data);
        }
    });

    //Registration
    $("#sign_up").click(function(e){
        e.preventDefault();
        const first_name = $('#first_name').val();
        const last_name = $('#last_name').val();
        const email = $('#inputEmail').val();
        const password = $('#password').val();
        const conf_password = $('#conf_password').val();
        let flag = 0;
        
        //validate
            //Check names contain
            if (!check_string(first_name) || first_name.trim() == '') {
                $('#first_name_alert').fadeIn(1000).html('First Name must contain only English letters.').css('color', 'red');
                $('#first_name').addClass('is-invalid').focus();
                flag = 1;
            }
            if(!check_string(last_name) || last_name.trim() == ''){
                $('#last_name_alert').fadeIn(1000).html('Last Name must contain only English letters.').css('color', 'red');
                $('#last_name').addClass('is-invalid').focus();
                flag = 1;
            }

            if(email.trim() == '' ){
                $('#inputEmail').addClass('is-invalid').focus();
                flag = 1;
            }else if(email.trim() != '' && !reg.test(email)){
                $('#inputEmail').addClass('is-invalid');
                alert('Please enter a valid Email address');
                flag = 1;
            }

            //Check names lenght
            if (!check_name_lenght(first_name)) {
                $('#first_name_alert').fadeIn(1000).html('First Name must be between 2 and 20 characters.').css('color', 'red');
                $('#first_name').addClass('is-invalid').focus();
                flag = 1;
            }
            if(!check_name_lenght(last_name)){
                $('#last_name_alert').fadeIn(1000).html('Last Name must be between 2 and 20 characters.').css('color', 'red');
                $('#last_name').addClass('is-invalid').focus();
                flag = 1;
            }

            //Chck Password length
            if (!password_lenght(password) || password.trim() == '') {
                $('#password_alert').fadeIn(1000).html('Password must be between 6 and 25 characters.').css('color', 'red');
                $('#password').addClass('is-invalid').focus();
                flag = 1;
            }
            if(!password_lenght(conf_password) || conf_password.trim() == ''){
                $('#conf_password_alert').fadeIn(1000).html('Confirm Password must be between 6 and 25 characters.').css('color', 'red');
                $('#conf_password').addClass('is-invalid').focus();
                flag = 1;
            }

            //Check password contain
            if (!check_password(password)) {
                $('#password_alert').fadeIn(1000).html('Password must be contain 1 lower, 1 upper case English letter and numeric character.').css('color', 'red');
                $('#password').addClass('is-invalid').focus();
                flag = 1;
            }

            if (!check_password(conf_password)) {
                $('#conf_password_alert').fadeIn(1000).html('Confirm Password must be contain 1 lower, 1 upper case English letter and numeric character.').css('color', 'red');
                $('#conf_password').addClass('is-invalid').focus();
                flag = 1;
            }

            if (password != conf_password) {
                alert('Password do not match.');
                $('#password').addClass('is-invalid').focus();
                $('#conf_password').addClass('is-invalid').focus();
                flag = 1;
            }

            if($('#check1').prop("checked") == false) {
                $('#check1').addClass('is-invalid').focus();
                flag = 1;
            }else if($('#check2').prop("checked") == false) {
                $('#check2').addClass('is-invalid').focus();
                flag = 1;
            }

            if (flag == 1){
                $('#password').val('');
                $('#conf_password').val('');
            }else {
                let data = {first_name:first_name, last_name:last_name, email:email, password:password};
                console.log(data);
                $('.gradient-box').hide();
                $('#success_login').show();
            }

    });

    function check_string(string_name) {
        const reg_string = /^(?!.*[0-9])(?!.*[а-яА-Я])(?=.*[a-zA-Z])*\w+/gm;
        if (string_name.match(reg_string)) {
            return true;
        }
        return false;
    }

    function check_name_lenght(str){
        if (str.length < 2 || str.length > 20) {
            return false;
        }
        return true;
    }

    function password_lenght(check_pwd){
        if(check_pwd.length < 6 || check_pwd.length > 25) {
            return false;
        }
        return true;
    }

    function check_password(password) {
        const reg_pwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[А-Я])(?!.*[а-я])/;
        if (password.match(reg_pwd)) {
            return true;
        }
        return false
    }
});