import _ from 'lodash';
import sum from './module'; // импорт одной функции
import functions from './module'; // импорт объекта с несколькими функциями
import {
  miltiply
} from './module'; // импорт функции с помощью деструктуризации

import './scss/app.scss';

import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";

const productList = getProductList(20);
renderGoodsList(productList);