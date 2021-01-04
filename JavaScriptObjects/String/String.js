let msg = "WELCOME TO JS-STRING";
document.getElementById("root").innerHTML = msg;
console.log(msg);
// STRING-METHOD

// length
console.log("Length: ", msg.length);

// indexOf
console.log("FirstIndex: ", msg.indexOf("E"));

// lastIndexOf
console.log("LastIndex: ", msg.lastIndexOf("E"));

// indexOf with starting position
console.log("FirstIndexFromIndex 5: ", msg.indexOf("E", 5));

// lastIndexOf with starting position
console.log("LastIndexFromIndex 5: ", msg.lastIndexOf("E", 5));

// search()
console.log("Searched JS At: ", msg.search("JS"));
console.log("--------------------------");
// EXTRACTING STRING PARTS

//  slice(start,end)
console.log("slice(0,13): ", msg.slice(0, 13));
console.log("slice(-13,-7): ", msg.slice(-13, -7));

console.log("slice(7): ", msg.slice(7));
console.log("slice(-7): ", msg.slice(-7));

// substring(start,end)
console.log("substring(0,13): ", msg.substring(0, 13));
// It will not accept negative position...
console.error("substring(-13,-5): ", msg.substring(-13, -5));

console.log("substring(5): ", msg.substring(5));

// substr(start, lengthOfExtractedPart)
console.log("substr(0,3): ", msg.substr(0, 3));

console.log("substr(3): ", msg.substr(3));

console.log("substr(-3): ", msg.substr(-3));

// replace("ToChangeString","String");
console.log("replace('JS','JAVASCRIPT'): ", msg.replace("JS", "JAVASCRIPT"));
console.log("replace(/js/i,'JAVASCRIPT'): ", msg.replace(/js/i, "JAVASCRIPT"));

// with global match /g
console.log("replace(/E/g,'3'): ", msg.replace(/E/g, "3"));

// CONVERTING TO UPPER AND LOWER CASE

let str1 = "lowerToUpper";
let str2 = "UPPERTolower";
console.log("--------------------------");
console.log("String-1: ", str1);
console.log("String-2: ", str2);

// toUpperCase
console.log("str1.toUpperCase(): ", str1.toUpperCase());

// toLowerCase
console.log("str2.toLowerCase(): ", str2.toLowerCase());

// CONCATING STRINGS
console.log("--------------------------");
// concat(string1,string2);
let a = "Welcome To";
let b = "JS-String";

console.log("concat(a,b): ", a.concat(" ", b));

console.log("--------------------------");

// trim()
let c = "           Hello              ";
console.log("String: ", c);
console.log("trim(): ", c.trim());

// STRING PADDING
console.log("--------------------------");
let d = "5";
let e = "str";

// padStart
console.log("padStart(4,0)", d.padStart(4, 0));
console.log("padStart(10,'_')", e.padStart(10, "_"));

// padEnd
console.log("padEnd(4,0)", d.padEnd(4, 0));
console.log("padEnd(10,'_')", e.padEnd(10, "_"));

// EXTRACTING STRING CHARACTERS
console.log("--------------------------");

// charAt(positionNumber)
console.log("charAt(0): ", msg.charAt(0));

// charCodeAt(positionNumber)
console.log("charCodeAt(0): ", msg.charCodeAt(0));

// property Access
console.log("msg[0]: ", msg[0]);

// CONVERTING STRING TO AN ARRAY

// using split()

let str3 = "a,b,c,d,e,f, g h i,j_k_l";
let str4 = "1|2|3|4|5";
console.log("str3.split(',')", str3.split(","));
console.log("str3.split(' ')", str3.split(" "));
console.log("str3.split('_')", str3.split("_"));
console.log("str4.split('|')", str4.split("|"));












