/*Functions Problem Set*/

/* 
isEven()
Write a function isEven() which takes a single numeric argument and 
return true if the number is even, and false otherwise
Example:
isEven(42)     //true
isEven(555)    //false
*/

var isEven = function (number) {
    if (number%2 === 0)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}

isEven(3);

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

divideByThree(6);

/*
factorial()
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1
Example: 
factorial(5);   //120
factorial(10);  //3628800
*/


function factorial(num) {
  if (num === 0)
    console.log("1");
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  console.log(num)
}
factorial(10);

/*
kebabToSnake()
write a function kebabToSnake() which takes a single kebab-cased 
string argument and return the sanke_cased version
Basically, replace "-" with "_"
Example:
kebabToSnake("hello-world");    //"hello_world"
*/

function kebabToSnake(newstr) {

var re = /-/g;
var str = newstr;
var newstr = str.replace(re, "_");
console.log(newstr);

}

kebabToSnake("Katherine-Lingad-is-still-awesome!")