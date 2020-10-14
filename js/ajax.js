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

// Парсит объект в get-строку
function parseObjToGet(obj) {
    let getStr = '';
    for (const key in obj) {
        getStr += `${key}=${obj[key]}&`;
    }
    return getStr;
}