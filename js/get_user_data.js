'use strict';


let userEmail = getCookie('email');
const changeUserDataForm = document.querySelector('#change-user-data');
const radioSex = document.querySelectorAll('.radio-sex');

let userPassword, userName, userBirthday, userMail;

// TODO Получение данных полльзователя и их вывод в поля для редактирования
getUserData();
async function getUserData() {
    let response = await sendRequest('get_user_data.php', 'POST', `email=${userEmail}`);
    // Данные с сервера распарсили в объект
    const userData = JSON.parse(response);
    // userMail = changeUserDataForm.elements.email;
    userName = changeUserDataForm.elements.name;
    userPassword = changeUserDataForm.elements.pass;
    userBirthday = changeUserDataForm.elements.birthday;

    // Добавили на форму все текущие данные пользователя
    // userMail.value = userData.email;
    userName.value = userData.name;
    userPassword.value = userData.password;
    userBirthday.value = userData.birthday;
    M.updateTextFields(); // Обновление полей

    // Отмечаем пол
    radioSex.forEach(radio => {
        if (radio.value == userData.sex) {
            radio.checked = true;
        }
    });
}

// TODO Обновление данных по нажатию на кнопку 
const saveUserDataButton = document.querySelector('#save-user-data');
saveUserDataButton.addEventListener('click', (e) => {
    e.preventDefault();
    changeUserData();
});

async function changeUserData() {
    let newSex;
    radioSex.forEach(radio => {
        if (radio.checked) {
            newSex = radio.value;
            return;
        }
    });
    const updateData = {
        'email': userEmail,
        'name': userName.value,
        'pass': userPassword.value,
        'birthday': userBirthday.value,
        'sex': newSex
    };
    let response = await sendRequest('update_user_data.php', 'POST', parseObjToGet(updateData));
    if (response == 1) {
        M.toast({html: 'Данные обновлены успешно.', displayLength: 3000});
    } else {
        M.toast({html: 'Ошибка обновления.'});
    }
}