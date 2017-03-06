// JavaScript File
// asks age
var age = prompt("How old are you?")

//check to see if age is greater than 0
if (age < 0) {
    // If age is negative print error message
    console.log("Error! Please enter valid number")
}
// If age is 21 print "happy 21st birthday!"
else if (age == 21) 
{
        console.log("Happy 21st Birthday!")
}
else
{
    // If age is odd print "your age is odd!"
    //(not evenly divisible by two)
   if (age%2 === 1) {
            console.log("Your age is odd!")
    }
}

//BONUS If age is a perfect square print "perfect square!"