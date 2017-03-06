/* For Loops Problem Set */

// 1. Print all numbers betweeen -10 and 19
console.log("Printing even numbers between -10 and 19")
for (var i = -10; i <= 19; i++)
{
console.log(i);
}


// 2. Print all even number between 10 and 40
console.log("Printing even numbers between 10 and 40")
for (var j = 10; j <= 40; j += 2)
{
    console.log(j);
}
// 3. Print all numbers between 300 and 333
console.log("Printing all numbers between 300 and 333")
for (var i = 300; i <= 333; i ++)
{
    console.log(i);
}
// 4. Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for (var i = 5; i <= 50; i++)
{
    if (i%5 === 0 && i%3 === 0)
    console.log(i);
}