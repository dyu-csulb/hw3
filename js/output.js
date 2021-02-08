/* ============================
8.	What is the output of the following?
==============================*/
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(2 + 3 * 5);
console.log((2 + 3) * 5);
console.log(10 % 3);


/* ============================
9.	Variable Scope: What is the output of the following?
==============================*/
let num1 = 0;
{
  num1 = 1; 
  const num2 = 0;
}
console.log(num1); 
console.log(num2); 
