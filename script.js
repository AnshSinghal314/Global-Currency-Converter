const BASE_URL="https://api.frankfurter.dev/v1/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const updateExchangeRates = async ()=>{
  let amount = document.querySelector(".amount input");
    
    let amountValue = amount.value;
    if(amountValue === "" || amountValue < 1){
        amountValue = 1 ;
        amount.value = "1"
    }
    const URL = `${BASE_URL}?from=${fromCurr.value}&to=${toCurr.value}`;
    let responce = await fetch(URL);
    let data = await responce.json();
    let {rates} = data;
    let exchangeRate = rates[toCurr.value];

    let finalAmount = amountValue * exchangeRate;
    msg.innerText = `${amountValue}${fromCurr.value} = ${finalAmount}${toCurr.value}`;
};

for(let select of dropdowns){
    for(currCode in countryList){
        let newOptions = document.createElement("option");
        newOptions.innerText = currCode;
        newOptions.value = currCode;
        select.append(newOptions);
        if(select.name === "from" && currCode === "USD"){
            newOptions.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOptions.selected = "selected";
        }
    }

    select.addEventListener("change" , (event) => {
        updateFlag(event.target);
    });
}
const updateFlag = (ele)=>{
    let currCode = ele.value;
    let countryCode = countryList[currCode];
    let newScr = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
    let img = ele.parentElement.querySelector("img");
    img.src = newScr;
}

btn.addEventListener("click" ,(event)=>{
    event.preventDefault();
    updateExchangeRates();
});

window.addEventListener("load" , ()=>{
 updateExchangeRates();
});

