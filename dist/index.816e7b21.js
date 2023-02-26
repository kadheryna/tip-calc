"use strict";
const tipButton = document.querySelectorAll(".tipButton");
const resetButton = document.querySelector(".resetButton");
const billInput = document.querySelector(".billInput");
const peopleInput = document.querySelector(".peopleNumber");
const customTip = document.querySelector(".customTip");
const tipTotal = document.querySelector(".tipAmount");
const personTotal = document.querySelector(".personTotal");
const warning = document.querySelector(".warningTitle");
function personCheck() {
    this.value = this.value.replace(/[^0-9.]/g, "");
    if (this.value[0] === "0") {
        warning.style.display = "block";
        peopleInput.style.borderColor = "hsla(21, 100%, 50%)";
    } else if (this.value.includes(".")) this.value = parseFloat(this.value);
    else if (/^0/.test(this.value)) this.value = this.value.replace(/^0/, "");
}
function billCheck() {
    this.value = this.value.replace(/[^0-9.]/g, "");
    if (/^0/.test(this.value)) this.value = this.value.replace(/^0/, "");
}
function customTipCheck() {
    this.value = this.value.replace(/[^0-9.]/g, "");
    if (this.value.includes(".")) this.value = parseFloat(this.value);
    else if (/^0/.test(this.value)) this.value = this.value.replace(/^0/, "");
}
function calculate() {
    if (billInput.value != 0 & peopleInput.value != 0 & customTip.value != 0) {
        switch(tipButton){
            case "5%":
                result = billInput * 0.05;
                break;
            case "10%":
                result = billInput * 0.1;
                break;
            case "15%":
                result = billInput * 0.15;
                break;
            case "25%":
                result = billInput * 0.25;
                break;
            case "50%":
                result = billInput * 0.5;
                break;
            case "customTip.value":
                result = billInput * customTip.value;
                break;
        }
        let calculatedTip = result / peopleInput.value;
        tipTotal.innerHTML = calculatedTip;
        let calculatedPerson = (calculatedTip + result) / peopleInput.value;
        personTotal.innerHTML = calculatedPerson;
    }
}
function reset() {
    personTotal.innerHTML = "";
    tipTotal.innerHTML = "";
    peopleInput.value = "";
    billInput.value = "";
    customTip.value = "";
}
peopleInput.addEventListener("input", personCheck);
billInput.addEventListener("input", billCheck);
customTip.addEventListener("input", customTipCheck);
tipButton.addEventListener("click", calculateTip);
resetButton.addEventListener("click", reset) // policzyć rachunek i z tego tip podzielić na ilość osób
 // rachunek + tip i podzielić na 5
;

//# sourceMappingURL=index.816e7b21.js.map
