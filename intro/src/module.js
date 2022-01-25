function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export default sum; // экспорт одно из функций

export { // экспорт объекта с несколькими функциями
  sum,
  multiply
};