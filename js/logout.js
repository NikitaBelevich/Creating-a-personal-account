'use strict';

const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', (e) => {
    let userCookie = getCookie('email');
    deleteCookie('email');
    location.reload();
});