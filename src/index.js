import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";

const productList = getProductList(20);
renderGoodsList(productList);

import _ from 'lodash';
import './scss/app.css';

import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.js';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.js';


const API_URL = 'http://localhost:3000/api/v1';

const api = new ApiHandler(API_URL);
const eventEmmiter = new EventEmitter();

const cart = new CartModel(api, eventEmmiter);
const showcase = new ShowcaseModel(api, eventEmmiter, cart);

eventEmmiter.subscribe('showcaseFeched', (data) => {
  console.log(data);
});

eventEmmiter.subscribe('cartFeched', (data) => {
  console.log(data);
});

showcase.fetch();
cart.fetch()
  .then((data) => {
    console.log(`Данные получены`);
  })
  .catch((err) => {
    console.log(`Данные не получены`);
  });