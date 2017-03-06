//Guessing Game

// create secretNumber
var secretNumber = 2;

//2. ask user for guess
var guessNumber = prompt("Guess a number between 1-5", " ");

//3. check if guess is right
if (guessNumber == secretNumber) 
{
    console.log("You guessed right");
}
else
{
    //4. check if guess is higher
    if (guessNumber > secretNumber)
    {
        console.log("Your guess is high");
    }
    else
    //5. otherwise, check if lower
    {
        console.log("Your guess is low");
        
    }
}
