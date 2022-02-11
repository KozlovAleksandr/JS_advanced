import EventEmitter from "./EventEmitter.mjs";

export default class ProductList extends EventEmitter {
  constructor() {
    super();
    this.list = [];
  }

  /**
   * Согдание массива из списком товаров
   * @param {*} list 
   */
  set(list) {
    this.list = [...this.list, ...list];
    this.emit('onSet', this.get());
  }

  /**
   * Создание копии списка товаров
   * @returns копия списка товаров
   */
  get() {
    return [...this.list];
  }

  /**
   * Создание копии товара по id
   * @param {*} id
   * @returns Копия товара , полученного по id
   * Object.assign({}, {}) - создаёт новый объект , объединяя два объекта 
   * переданных в качестве параментов
   */
  getById(id) {
    return Object.assign({}, this.list.find((item) => item.id === id));
  }

  /**
   * Добавление товара
   * @param {*} item товар
   */
  add(item) {
    this.list.push(item);
    this.emit('onAdd', item);
  }

  /**
   * Удаление товара
   * @param {*} id 
   */
  remove(id) {
    const idx = this.list.findIndex((item) => item.id === id);
    this.list.splice(id, 1);
    this.emit('onRemove', id);
  }
}