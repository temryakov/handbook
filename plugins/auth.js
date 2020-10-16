function validateForm() {
    var checklogin = document.forms['loginform']['login'].value;
    var checkpassword = document.forms['loginform']['password'].value;

    if (checklogin == "") {
        document.getElementById("empty_value").innerHTML = 'Вы не ввели логин.';
        return false;
    }

    else if (checkpassword == "") {
        document.getElementById("empty_value").innerHTML = 'Вы не ввели пароль.';
        return false;
    }
}