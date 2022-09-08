const datecalcForm = document.getElementById("datecalc_form");
const result = document.getElementById("datecalc__result");
const yearsField = document.getElementById("datecalc__years");
const monthsField = document.getElementById("datecalc__months");
const daysField = document.getElementById("datecalc__days");

export const printError = (errorText) => {
  result.innerText = errorText;
};

export const printResult = ({ years, months, days }) => {
  datecalcForm.style.display = "none";
  result.style.display = "block";
  yearsField.innerText = Math.floor(years);
  monthsField.innerText = Math.floor(months);
  daysField.innerText = Math.floor(days);
};
