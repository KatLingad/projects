console.log("CONNECTED");

// 01 printReverse()
/* 
Write a function printReverse() that takes an array as an arguement
and prints out the elements in the array in reverse order
(don't actually reverse the array itself)


Example:
printReverse([1,2,3,4]);
-> 4
-> 3
-> 2
-> 1
printReverse(["a","b","c","d"]);
-> d
-> c
-> b
-> a
*/
function printReverse (array) {
    for (var i = array.length - 1; i >= 0; --i) {
    console.log(array[i]);
}
};

printReverse([1,2,3,4]);


// 02 isUniform()
/*
Write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical


Example:
isUniform([1,1,1,1])		-> true
isUniform([2,1,1,1])		-> false
isUniform(["a","a","a"])	-> true
isUniform(["a","b","p"])	-> false

for(var i = 0; i < array.length - 1; i++) {
*/
    
function isUniform(array) {
        var compare;
        var count = 0;

        for (var i = 0; i < array.length; i++) {
            if(array[0] != array[i]) {
                count++;
            }
        }
        if(count > 0) {
            compare = false;
        } 
        else {
            compare = true;
        }
        console.log(compare);

};

isUniform([2,4,3,2]);





// 03 sumArray()
/*
Write a function sumArray() that accepts an array of numbers and 
returns the sum of all numbers in the array

Example:
sumArray([1,2,3])			-> 6
sumArray([4,8,5,10])		-> 27
sumArray([-5,100])			-> 95
*/

function sumArray(array) {
    var length = array.length
    var sum = 0;
  for (var  i = 0; i < length; [i++] ) {
       sum += array[i];
  };
  console.log(sum);
}

sumArray([10,1,2,3]);
    



// 04 max()
/*
Write a function max() that accepts an array of numbers and 
return the maximum number in the array

Example:
max([1,2,3])                -> 3
max([4,10,5,10])            -> 10
max([-5,100])               -> 100
*/
function max(array) {
var max= 0;

for (var i=0; i <= max; i++) {
    if (array[i] > max) {
        var max=array[i];
    }
}

console.log(max);

};

max([50,4,1]);
