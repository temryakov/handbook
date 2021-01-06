function validateLogin () {
    
    let checklogin = document.forms['registration_form']['login'].value;

    if (checklogin == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели логин.'
        return false;
    }

function validateName () {

    let checkname = document.forms['registration_form']['name'].value;

    if (checkname == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели имя.'
        return false;
    }

function validatePassword () {

    let checkpassword = document.forms['registration_form']['password']
    let checkconfirmpassword = document.forms['registration_form']['confirmpassword']
    
    if (checkpassword == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели пароль.'
        return false;
    }
    else if (checkconfirmpassword == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не повторили пароль.'
        return false;
    }
    else if (checkpass.length < 6) {
        document.getElementById('empty_value').innerHTML = 'Пароль должен содержать более 6 символов\n и не содержать пробелы.'
        return false;
    }
    else if (/[^a-zA-Z0-9_-]/.test(checkpassword)) {
        document.getElementById('empty_value').innerHTML = 'В пароле и имени разрешены только a-z, A-Z, 0-9 - и _.'
        return false;
    }
    else if (checkpass !== checkconfpass) {
        document.getElementById('empty_value').innerHTML = 'Пароли не совпадают.'
        return false;
    }
