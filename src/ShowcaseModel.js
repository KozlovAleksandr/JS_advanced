import ProductList from './ProductList.js'

/**
 * Данные о витрине
 */
export default class ShowcaseModel extends ProductList {
  constructor(apiHandler, eventEmiter, cart) {
    super([]),
      this.api = apiHandler,
      this.cart = cart,
      this.eventEmmiter = eventEmiter;
  }

  /**
   * data - тело ответа от сервера
   * парсим тело ответа
   * 
   * @param {*} onError 
   */
  fetch(onError) {
    this.api.getCatalog(
      (data) => {
        this.list = JSON.parse(data);
        this.eventEmmiter.emit('showcaseFeched', this.list);
      },
      onError
    );
  }

  buy(id, onError) {
    const product = this.find(id);
    if (product) {
      this.cart.add(product, onError);
    }
  }
}