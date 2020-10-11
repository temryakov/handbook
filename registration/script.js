function validateForm () {
    var checklogin = document.forms['registration_form']['login'].value;
    var checkname = document.forms['registration_form']['name'].value;
    var checkpassword = document.forms['registration_form']['password'].value;
    var checkconfirmpassword = document.forms['registration_form']['confirm_password'].value;

    if (checklogin == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели логин.'
        return false;
    }
    else if (checkname == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели имя.'
        return false;
    }
    else if (checkpassword == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не ввели пароль.'
        return false;
    }
    else if (checkconfirmpassword == "") {
        document.getElementById('empty_value').innerHTML = 'Вы не повторили пароль.'
        return false;
    }
    else if (checkpassword.length < 6) {
        document.getElementById('empty_value').innerHTML = 'Пароль должен содержать более 6 символов\n и не содержать пробелы.'
        return false;
    }
    else if (checkpassword !== checkconfirmpassword) {
        document.getElementById('empty_value').innerHTML = 'Пароли не совпадают.'
        return false;
    }
}