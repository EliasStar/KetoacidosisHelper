var weight = 0;
var size = 0;

var insulin = 0;

var glucose = [0, 0];
var plasma = [0, 0];

//Elements
var kofOutput;
var hourlyOutput;
var dailyOutput;

var insulinOutput;

var natriumOutput;

window.onload = function () {
	kofOutput = document.getElementById('kof-output');
	hourlyOutput = document.getElementById('hourly-output');
	dailyOutput = document.getElementById('daily-output');

	insulinOutput = document.getElementById('insulin-output');

	natriumOutput = [document.getElementById('natrium-1'), document.getElementById('natrium-2')];
};

//Total
function setWeight(value) {
	weight = value * 1;

	if (weight < 0) {
		weight = 0;
		element.value = weight;
	}

	calculateInsulin();
	calculateTotal();
}

function setSize(value) {
	size = value * 1;

	if (size < 0) {
		size = 0;
		element.value = size;
	}

	calculateTotal();
}

function calculateTotal() {
	if (weight != 0 && size != 0) {
		var kof = Math.sqrt(weight * size / 3600);
		kofOutput.value = Math.round(kof * 100) / 100;
		hourlyOutput.value = Math.round(kof * 1250) / 10;
		dailyOutput.value = Math.round(kof * 30000) / 10;
	}
}

//Insulin
function setInsulin(value) {
	insulin = value * 1;
	calculateInsulin();
}

function calculateInsulin() {
	if (insulin != 0 && weight != 0) {
		insulinOutput.value = Math.round(insulin * weight * 10) / 10;
	}
}

// Corrected Na
function setGlucose(value, number) {
	glucose[number] = value * 1;
	calculateNatrium(number);
}

function setPlasma(value, number) {
	plasma[number] = value * 1;
	calculateNatrium(number);
}

function calculateNatrium(number) {
	if (glucose[number] != 0 && plasma[number] != 0) {
		natriumOutput[number].value = Math.round((plasma[number] + (glucose[number] - 100) / 50) * 10) / 10;
	}
}