'use strict';


// Функция возвращает промис, который либо получил данные, либо завершился ошибкой
function sendRequest(URL, method = 'GET', data, responseType = 'text') {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, URL);

        // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.responseType = responseType;
        if (method == 'POST') {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        } else {
            xhr.send();
        }
        

        // Получен ответ
        xhr.onload = () => {
            // Если код не 200, то завершаем промис ошибкой HTTP
            if (xhr.status != 200) {
                reject(new Error(`HTTP status: ${xhr.status}\n URL: ${URL}`));
            }
            resolve(xhr.response);
        }
        // обработаем ошибку, не связанную с HTTP (например, нет соединения)
        xhr.onerror = () => {
            
        }
        // выведем прогресс
        xhr.onprogress = (event) => {
            
        }
    });
}


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

function parseObjToGet(obj) {
    let getStr = '';
    for (const key in obj) {
        getStr += `${key}=${obj[key]}&`;
    }
    return getStr;
}

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


