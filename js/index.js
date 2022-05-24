const elForm = document.querySelector (".form");
const elFormInput = document.querySelector (".form__input");
const elFormSelect = document.querySelector (".form__select");
const elResult = document.querySelector (".form__result");

const usd =	11084.90;
const euro =11836.46;
const yuan =1666.65;
const sum =0;
const rubl =190.38;
const dinor =36213;
const funt =13850;


elForm .addEventListener ("submit", function (evt) {
  evt.preventDefault()

  const inputValue = elFormInput.value;
  let inputSelect = elFormSelect.value;
  console.log(inputSelect);
  if (elFormSelect.value ==="usd") {
    elResult.textContent= inputValue*usd;
  } else if (elFormSelect.value === "euro"){
    elResult.textContent= inputValue*euro;
  } else if (elFormSelect.value === "yuan"){
    elResult.textContent= inputValue*yuan;
  } else if (elFormSelect.value === "sum"){
    elResult.textContent= inputValue-sum;
  } else if (elFormSelect.value === "rubl"){
    elResult.textContent= inputValue*rubl;
  }else if (elFormSelect.value === "dinor"){
    elResult.textContent= inputValue*dinor;
  } else if (elFormSelect.value === "funt"){
    elResult.textContent= inputValue*funt;
  }

})
