function validateForm () {
    
    let checklogin = document.forms['registration_form']['login'].value;
    let checkname = document.forms['registration_form']['name'].value;
    let checkpass = document.forms['registration_form']['password'].value;
    let checkconfpass = document.forms['registration_form']['confirm_password'].value;

    if (checklogin == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели логин.'
        return false;
    }
    else if (checkname == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели имя.'
        return false;
    }
    else if (checkpass == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели пароль.'
        return false;
    }
    else if (checkconfpass == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не повторили пароль.'
        return false;
    }
    else if (checkpass.length < 6) {
        document.getElementById('empty_value').innerHTML = 'Пароль должен содержать более 6 символов\n и не содержать пробелы.'
        return false;
    }
    else if (checkpass !== checkconfpass) {
        document.getElementById('empty_value').innerHTML = 'Пароли не совпадают.'
        return false;
    }
}