const path = require('path'); // библиотека позволяющая создавать относитьные пути для файлов
const fs = require('fs'); // бибилиотека для работы с файловой системой (файлами компьютера)
const express = require('express'); // бибилиотека express
const app = express(); // создаём экземпляр приложения

const port = 3000;

/*
Создаются пути до файлов , в которых будут храниться данные
*/
const catalog_path = path.resolve(__dirname, './data/catalog.json'); // данные о витрине магазина
const cart_path = path.resolve(__dirname, './data/cart.json'); // корзина
const static_dir = path.resolve(__dirname, '../dist'); // путь до директории с конечными файлами

/*
Делаем директорию dist публичной для нашего сервера.
Делается с помощью плагина фреймворка express - static (передаётся переменная с адресом dist).
После подключения сервер будет работать в режиме отправки статичных файлов.
Позволяет обращаться напрямую к файлам , не только к странице , с которой получен html файл.
*/
app.use(express.static(static_dir));
/*
Плагин парсит json запросы в читаемый код
*/
app.use(express.json());

/*
 Установка get запроса на получение каталога
 1 параметр - адрес , который будет обрабатывать запрос
 req - запрос , из которого получаем данные о пришедщем запросе
 res - ответ , в которым что-то записываем и отправляем обратно в браузер
*/
app.get('/api/v1/catalog', (req, res) => {
  // читаем файл. Параметры: 1-адрес файла , который ситаем. 2-кодировка файла , 
  // 3-callback функция (err - ошибка , data - в случае успеха передаются данные)
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send(err);
    }
  });
});

/*
Запрос на получение корзины
*/
app.get('/api/v1/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send(err);
    }
  });
});

/*
 Установка post запроса на получение каталога
*/
app.post('/api/v1/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data); // парсим json строку (преобразуем в массив)
      cart.push(req.body);
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.sendStatus(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});

app.delete('/api/v1/cart/:id', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data); // парсим json строку (преобразуем в массив)
      const idx = cart.findIndex((item) => item.id == req.params.id);
      if (i < 0) {
        res.status(404).send('product not found');
        return;
      } else {
        cart.splice(idx, 1);
      }
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.sendStatus(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});