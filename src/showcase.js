const $showcase = document.querySelector('.showcase');

/**
 * Функция генерирует разменту из значений принятого элемента
 * @param {*} param0 
 * @returns {string} строка разметки с информацией о товаре
 */
const renderGoodsItem = ({
  title,
  price
}) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

/**
 * Функция принимает массим товаров , перебирает его с помощью .map
 * создавая для каждого елемента строку разметки.
 * После создания всех строк , они склеиваются с помощью .join
 * @param {Object} list массив с произвольными товарами 
 */
const renderGoodsList = (list) => {
  let goodsList = list.map((item) => {
    return renderGoodsItem(item);
  }).join('');
  $showcase.insertAdjacentHTML('beforeend', goodsList);
};

export default renderGoodsList;