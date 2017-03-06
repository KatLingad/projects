/* 
Color Changer

Toggle the body's background color between Purple
and white, when a button is clicked.
*/

// Select the button and assign to a variable

// Attach an event listener to the button when it is clicked
document.getElementById("myBtn").addEventListener("click", function(){
// the callback function will use if/else statement
// check if it's purple- if it's purple change the background style to white
// otherwise it will change style to purple.
  
  if ( addEventListener.myBtn !== 'toggled') {
        document.body.style.backgroundColor = "purple";
        addEventListener.myBtn = 'toggled';
    }
    else {
        document.body.style.backgroundColor = "white";
        addEventListener.myBtn = '';
    }
});





//Bonus: use the toggle method instead