'use strict';


// Регистрация пользователя
const sendButton = document.querySelector('#signup-send');
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#signup-name').value;
    const password = document.querySelector('#signup-pass').value;
    const email = document.querySelector('#signup-email').value;
    const birthday = document.querySelector('#signup-birthday').value;
    const radioSex = document.querySelectorAll('.radio-sex');
    let valueChekedRadio;
    radioSex.forEach(radio => {
        if (radio.checked) {
            valueChekedRadio = radio.value;
            return;
        }
    });
    
    const formData = {
        'name': name,
        'pass': password,
        'email': email,
        'birthday': birthday,
        'sex': valueChekedRadio
    };
    
    login(formData);
    async function login(userData) {
        let response = await sendRequest('core/signup.php', 'POST', parseObjToGet(userData));
        if (response == 2) {
            alert('Заполните все поля!');
        } else if (response == 1) {
            alert('Успех! Можно войти.');
        } else {
            alert('Ошибка! Повторите регистрацию позже.');
        }
    }

});


// Вход в личный кабинет
const signupButton = document.querySelector('#login-submit');
signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    const password = document.querySelector('#login-pass').value;
    const email = document.querySelector('#login-email').value;
    
    const formData = {
        'pass': password,
        'email': email,
    };
    
    signup(formData);
    async function signup(userData) {
        let response = await sendRequest('core/login.php', 'POST', parseObjToGet(userData));
        if (response == 2) {
            alert('Заполните все поля!');
        } else if (response == 0) {
            alert('Пользователь не найден.');
        } else {
            let response_json = JSON.parse(response);
            console.log(response_json);
            setCookie('email', response_json.email, {'max-age': 3600});
            location.href = 'core/cabinet.php';
        }
    }

});


