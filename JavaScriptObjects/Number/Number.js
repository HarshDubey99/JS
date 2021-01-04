var msg = "WELCOME TO JS-NUMBER";
document.getElementById("root").innerHTML = msg;
console.log(msg);

// toString

var x = 123;
console.log("X: ", x, " Type: ", typeof x);
var y = x.toString();
console.log("Y: ", y, " Type: ", typeof y);
console.log("10 + 10 = ", 10 + 10, " Type: ", typeof (10 + 10));
console.log("(10 + 10).toString() = ", (10 + 10).toString(), " Type: ", typeof (10 + 10).toString());
console.log("");
// toExponential()
var x = 123.456;
console.log("toExponential(2): ", x.toExponential(2));
console.log("toExponential(3): ", x.toExponential(3));
console.log("toExponential(4): ", x.toExponential(4));
console.log("toExponential(5): ", x.toExponential(5));
console.log("");

// toFixed()
var x = 1.234;
console.log("toFixed(2): ", x.toFixed(2));
console.log("toFixed(3): ", x.toFixed(3));
console.log("toFixed(4): ", x.toFixed(4));
console.log("toFixed(5): ", x.toFixed(5));
console.log("");

// toPrecision()

var x = 1.234;
console.log("toPrecision(2): ", x.toPrecision(2));
console.log("toPrecision(3): ", x.toPrecision(3));
console.log("toPrecision(4): ", x.toPrecision(4));
console.log("toPrecision(5): ", x.toPrecision(5));
console.log("");

// CONVERTING VARIABLE TO NUMBERS
// Number()
console.log("Number(true): ", Number(true));
console.log("Number(false): ", Number(false));
console.log("Number('10'): ", Number("10"));
console.log("Number('   10'): ", Number("    10"));
console.log("Number('10      '): ", Number("10          "));
console.log("Number('10.99'): ", Number("10.99"));
console.log("Number('10,99'): ", Number("10,99"));
console.log("Number('10 99'): ", Number("10 99"));
console.log("Number('10_99'): ", Number("10_99"));
console.log("Number('String'): ", Number("String"));
console.log("Number(new Date('2020 - 01 - 01')): ", Number(new Date("2020-01-01")));
console.log("");

// parseInt()
console.log("parseInt('10'): ", parseInt("10"));
console.log("parseInt('10.33'): ", parseInt("10.33"));
console.log("parseInt('10 33 44'): ", parseInt("10 33 44"));
console.log("parseInt('10 Years'): ", parseInt("10 Years"));
console.log("parseInt('Years 10'): ", parseInt("Years 10"));
console.log("");

// parseFloat()
console.log("parseFloat('10'): ", parseFloat("10"));
console.log("parseFloat('10.33'): ", parseFloat("10.33"));
console.log("parseFloat('10 33 44'): ", parseFloat("10 33 44"));
console.log("parseFloat('10 Years'): ", parseFloat("10 Years"));
console.log("parseFloat('Years 10'): ", parseFloat("Years 10"));
console.log("");

// NUMBER PROPERTIES

// Number.MAX_VALUE
console.log("Number.MAX_VALUE: ", Number.MAX_VALUE);
console.log("Number.MIN_VALUE: ", Number.MIN_VALUE);
console.log("Number.POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("Number.NaN: ", Number.NaN);
console.log("");
// CHECKING NUMBERS

// Number.isFinite()

console.log("Number.isFinite(123): ", Number.isFinite(123));
console.log("Number.isFinite(-1.23): ", Number.isFinite(-1.23));
console.log("Number.isFinite(true): ", Number.isFinite(true));
console.log("Number.isFinite(5-1): ", Number.isFinite(5 - 1));
console.log("Number.isFinite(0): ", Number.isFinite(0));
console.log("Number.isFinite('Hello'): ", Number.isFinite('Hello'));
console.log("Number.isFinite('20/09/2020'): ", Number.isFinite('20/09/2020'));
console.log("Number.isFinite('Infinity): ", Number.isFinite(Infinity));
console.log("Number.isFinite('-Infinity'): ", Number.isFinite(-Infinity));
console.log("Number.isFinite('0/0'): ", Number.isFinite(0 / 0));
console.log("");

// Number.isInteger()

console.log("Number.isInteger(123): ", Number.isInteger(123));
console.log("Number.isInteger(-1.23): ", Number.isInteger(-1.23));
console.log("Number.isInteger(true): ", Number.isInteger(true));
console.log("Number.isInteger(5-1): ", Number.isInteger(5 - 1));
console.log("Number.isInteger(0): ", Number.isInteger(0));
console.log("Number.isInteger('Hello'): ", Number.isInteger('Hello'));
console.log("Number.isInteger('20/09/2020'): ", Number.isInteger('20/09/2020'));
console.log("Number.isInteger('Infinity): ", Number.isInteger(Infinity));
console.log("Number.isInteger('-Infinity'): ", Number.isInteger(-Infinity));
console.log("Number.isInteger('0/0'): ", Number.isInteger(0 / 0));
console.log("");