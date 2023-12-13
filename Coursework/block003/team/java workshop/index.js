/*
1. Start by creating 3 variables to string together. Each variable will
be assigned to a value of the combination.

2.Complete the string by having each code of the combination in the order
that it was given.

3.Next create 3 new variables. Each variable must contain the corresponding
result of calculation using a unique arithmetic operator(+-/*)

4.The first variable will be a addition operator that will equal to 
the value of 10. The first number of the combination.

5.The second variable will be a * operator that will equal to the 
value of 40. The second number of the combination.

6.The third variable will be a - operator that will equal to the value
of 39. The third and final number of the combination.

7.Create an alert popup that has the following message.
"You have received this message because you have been chosen
 to open an important vault. Here is the secret combination:10-40-39" */

let str1 = "10-";
let str2 = "40-";
let str3 = "39";
let strComplete = `${str1} ${str2} ${str3}`;
console.log(strComplete); //This will complete the string will be in the correct order of the combination when displayed on the pop up box.
const comb1 = 5 + 5;
console.log(comb1);
const comb2 = 20 * 2;
console.log(comb2);
const comb3 = 40 - 1;
//These arithmetics in the variables will each value a number of the combination in the order that it was received.
console.log(comb3);
alert(`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${strComplete}`);
//A pop up box should display the message and combination with this code.