
document.write("<br/>" + Number("4.5456423121"));
document.write("<br/>" + Number(" "));
document.write("<br/>" + Number(""));
document.write("<br/>" + Number("55 22"));



let num = 444;
let s = String(500 + 46);
document.write("<br/>" + String(num));
document.write("<br/>" + String(546));
document.write("<br/>" + String(s + 500 + 46));
document.write("<br/>" + String("500" + "46") + String("400" + "99"));


document.write("<br/>" + num.toString());
document.write("<br/>" + String(num + num.toString()));


let numexp = 9.48;
document.write("<br/>" + numexp.toExponential(1));
document.write("<br/>" + numexp.toExponential(2));
document.write("<br/>" + numexp.toExponential(4));
document.write("<br/>" + numexp.toExponential(6));

let numfixed = 2.81;
document.write("<br/>" + numfixed.toFixed());
document.write("<br/>" + numfixed.toFixed(2));
document.write("<br/>" + numfixed.toFixed(4));
document.write("<br/>" + numfixed.toFixed(6));


let numPrec = 6.29;
document.write("<br/>" + numPrec.toPrecision());
document.write("<br/>" + numPrec.toPrecision(2));
document.write("<br/>" + numPrec.toPrecision(4));
document.write("<br/>" + numPrec.toPrecision(6));

let val = 4.57;
document.write("<br/>" + val.valueOf());
val = 9.34;
document.write("<br/>" + val);


document.write("<br/>" + Number(true));
document.write("<br/>" + Number(false));
document.write("<br/>" + Number("11"));
document.write("<br/>" + Number(" 22"));
document.write("<br/>" + Number("45 "));
document.write("<br/>" + Number(" 78 "));
document.write("<br/>" + Number("24.76"));
document.write("<br/>AAAA:" + Number("77,44"));
document.write("<br/>" + Number("55 99"));
document.write("<br/>" + Number("XYZ"));
document.write("<br/>" + Number(new Date("1999-30-08")));

document.write("<br/>MIN_VALUE, MAX_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY");

document.write("<br/>" + Number.MAX_VALUE);


document.write("<br/>" + Number.MIN_VALUE);

document.write("<br/>" + Number.POSITIVE_INFINITY);


document.write("<br/>" + Number.NEGATIVE_INFINITY);


document.write("<br/>" + parseInt("-40"));
document.write("<br/>" + parseInt("-50.99"));
document.write("<br/>" + parseInt("80"));
document.write("<br/>" + parseInt("90.78"));
document.write("<br/>" + parseInt("40 70 80"));
document.write("<br/>" + parseInt("years is:90"));
