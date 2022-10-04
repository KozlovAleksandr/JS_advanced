import {
  random
} from "lodash";

const PRODUCTS = [
  'Shirt',
  'Shoes',
  'Hat',
  'Jacket',
  'Socks'
];

const COLORS = [
  'green',
  'red',
  'orange',
  'black',
  'white'
];

let lastIndex = 0;

/**
 * Функция с помощью функции random бедёт произволные значения 
 * из массивов PRODUCTS и COLORS
 * @returns {string} название продукта и цвет
 */
function getProductName() {
  const product = PRODUCTS[random(0, PRODUCTS.length - 1)];
  const color = COLORS[random(0, COLORS.length - 1)];
  return `${product} ${color}`;
}

/**
 * Функция формирует данные по определёному товару
 * @returns {Object} индекс товара , название , цена
 */
function getProduct() {
  return {
    id: ++lastIndex,
    title: getProductName(),
    price: random(99, 999)
  };
}

/**
 * Функция генерирует массив с рандомными товарами
 * @param {number} count необходимое число товаров в массиве
 * @returns {Object} массив с произвольными товарами
 */
function getProductList(count) {
  let products = [];
  for (let i = 0; i < count; i++) {
    products.push(getProduct());
  }
  return products;
}

export default getProductList;