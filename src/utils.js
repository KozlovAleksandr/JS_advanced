/**
 * Отправляет запрос на сервер
 * @param {*} onError - callback функция в случае неуспешного запроса
 * @param {*} onSuccess - callback функция в случае успешного запроса
 * @param {*} url - адрес на который отправляется запрос
 * @param {*} method - метод запроса
 * @param {*} data - тело запроса
 * @param {*} headers - заголовки
 * @param {*} timeout - время ожидания запроса , после которого запрос считаем неуспешным
 */
export function send(onError, onSuccess, url, method = 'GET', data = '', headers = {}, timeout = 60000) {

  /*
  Запрос на сервер состоит из:
  - метода запроса (например GET или POST)
  - URL - адреса на который отправляется запроса
  - заголовка
  - тело запроса (если не GET) , содержащее отправляемую информацию
  */

  // 1. Создаём переменную
  let xhr;

  // 2. Записываем в переменную объект в зависимости от браузера
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest(); // Chrome, Mozilla, Opera, Safari
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP"); // Internet Explorer
  }

  // 3. С помощью объекта формируем поля запроса
  // 4. Свойство.timeout. Время задержки , которое будем ждать ответа , по истечению которого запрос считаем неудачным
  xhr.timeout = timeout;
  // 5. Свойство .ontimeout. Выполняет функцию после истечения времени запроса
  xhr.ontimeout = onError;

  /* 6. Свойство .onreadystatechange. Срабатывает при смене состояния запроса (состоянии готовности)
   * 0 состояние - запрос не отправлен
   * 1 состояние - запрос отправлен
   * 2 состояние - запрос дошёл до сервера
   * 3 состония - начало ответа от сервера
   * 4 состояние - ответ от сервера получен
   */
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // если ответ от сервера получен
      if (xhr.status < 400) { // если ответ успешный, коды меньше 400
        onSuccess(xhr.responseText); // передаёи тело ответа (responseText)
      } else if (xhr.status >= 400) { // если ответ неуспешный, коды 400 и выше
        onError(xhr.status); // передаёи статус ответа (status)
      }
    }
  };

  // 7. Свойство .open. Устанавливаем параметры запроса: метод , адрес , true - делает запрос асинхронным
  xhr.open(method, url, true);

  /* 8. Устанавливаем заголовки
   * .entries - разбивает объект на массивы сосстоящии из двух элементов
   * const [key, value] - деструктуризируем массив , объявляя элементы ключём и значением
   * .setRequestHeader - устанавливаем заголовки ключ и значение
   */
  for (const [key, value] of Object.entries(headers)) {
    xhr.setRequestHeader(key, value);
  }

  // 9. Отправляем запрос , передавая в него тело запроса
  // !! Тело всегда передаётся в виде строки. Если отправляется объект , то приводится к строки с помощью JSON
  xhr.send(data);
}

export function sendPromise(url, method = 'GET', data = '', headers = {}, timeout = 60000) {
  return new Promise((resolve, reject) => {
    send(reject, resolve, url, method, data, headers, timeout);
  });
}