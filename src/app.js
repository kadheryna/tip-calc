"use strict";

const tipButton = document.querySelectorAll(".tipButton");
const resetButton = document.querySelector(".resetButton");
const billInput = document.querySelector(".billInput");
const peopleInput = document.querySelector(".peopleNumber");
const customTip = document.querySelector(".customTip");
const tipTotal = document.querySelector(".tipAmount");
const personTotal = document.querySelector(".personTotal");
const warning = document.querySelector(".warningTitle");

let result;
function personCheck() {
	this.value = this.value.replace(/[^0-9.]/g, "");
	if (this.value === "0") {
		warning.style.display = "block";
		peopleInput.style.borderColor = "hsla(21, 100%, 50%)";
	} else if (this.value.includes(".")) {
		this.value = parseFloat(this.value);
	} else if (/^0/.test(this.value)) {
		this.value = this.value.replace(/^0/, "");
	} else {
		warning.style.display = "none";
		peopleInput.style.borderColor = "initial";
	}
}

function billCheck() {
	this.value = this.value.replace(/[^0-9.]/g, "");
	if (/^0/.test(this.value)) {
		this.value = this.value.replace(/^0/, "");
	}
}

function customTipCheck() {
	this.value = this.value.replace(/[^0-9.]/g, "");
	if (this.value.includes(".")) {
		this.value = parseFloat(this.value);
	} else if (/^0/.test(this.value)) {
		this.value = this.value.replace(/^0/, "");
	}
}

function calculate() {
	let tipValue = this.textContent;
	let bill = Number(billInput.value);
	let people = Number(peopleInput.value);
	let custom = customTip.value;
	if (bill != 0 && people != 0) {
		switch (tipValue) {
			case "5%":
				break;
			case "10%":
				result = bill * 0.1;
				break;
			case "15%":
				result = bill * 0.15;
				break;
			case "25%":
				result = bill * 0.25;
				break;
			case "50%":
				result = bill * 0.5;
				break;
			case `${custom}`:
				result = bill * Number(custom);
				break;
		}
	}
	let calculatedTip = (result / people).toFixed(2);
	tipTotal.innerHTML = `$${calculatedTip}`;
	let calculatedTotal = (bill / people + calculatedTip).toFixed(2);
	personTotal.innerHTML = `$${calculatedTotal}`;
}
function reset() {
	personTotal.innerHTML = "$0.00";
	tipTotal.innerHTML = "$0.00";
	peopleInput.value = "";
	billInput.value = "";
	customTip.value = "";
}

peopleInput.addEventListener("input", personCheck);
billInput.addEventListener("input", billCheck);
customTip.addEventListener("input", customTipCheck);
customTip.addEventListener("input", calculate);
resetButton.addEventListener("click", reset);
tipButton.forEach(button => button.addEventListener("click", calculate));
