// Array Todo List APP

//Use functions for adding todo, printing the list, and deleting todo
//1. Declare an array

var myArray = ["Clean", "Shopping", "Exercise", "Travel"]

//2. Prompt user on what they would like to do from the following options, 
   //then assign response to a variable
	
var toDo = prompt("What would you like to do? Choose from the following: NEW, LIST, DELETE, QUIT").toUpperCase();

switch(toDo) {
	/* "new" will prompt to enter a new todo item and will then push 
	user entry to the existing array
	Display the newly added todo item in the console to confirm that it has been added */
	case 'NEW':
		var newDo = prompt("Enter new todo item");
		var addArray = function(newDo) {
			var newArray = [newDo, "Clean", "Shopping", "Exercise", "Travel"];
			console.log('Your new to do item "' + newArray[0] + '" has been added');
			return newArray
		};
		addArray(newDo);
		break;
		
	
	/* "list" will print in console each todo item in the array with its 
		//		corresponding index 
		Example: 
		-> 0 : Get the milk
		-> 1 : Pick up dry cleaners
		-> 2 : Wash clothes */
	case 'LIST':
		var displayArray = function(i) {
			var i = 0;
			var x = 0;
			for (var i = 0; i < myArray.length; i++) {
   			console.log(x + ": " + myArray[i]);
   			x++;
			};
   		};
   		displayArray(0);
		break;
	
	// "delete" will prompt the user to enter the index of a todo item they wish to delete
	case 'DELETE':
		var deleteDo = prompt("Which todo item do you wish to delete? Enter Number: \n0: Clean \n1: Shopping \n2: Exercise \n3: Travel" );
		var deleteArray = function(deleteDo) {
			var num = deleteDo
			if ( num < 4 && num > 0) {
			var newArray = alert(myArray[num] + " has been deleted")
			};
			delete myArray[num]
		};
		deleteArray(deleteDo);
		break;
		
	//	- "quit" will end the program
	case 'QUIT':
		 prompt("Thank you")
		 break;
	default:
		console.log("Did not understand your choice");
}
		
					

		
