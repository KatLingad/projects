/*
Create and array of movie objects. Each movie should have a title, 
rating, and hasWatched properties. Iterate through the array and 
print out something that looks like:
You have watched "Moonlight" - 5 stars
You have not seen "La La Land" - 4.5 stars
You have seen "Rogue One" - 5 stars
You have not seen "Frozen" - 3.5 stars
*/

function Movies(title, rating, hasWatched) {
  this.title = title;
  this.rating = rating;
  this.hasWatched = hasWatched;
}

var movie = new Array();
movie[0] = new Movies("Moonlight", 5, "watched");
movie[1] = new Movies("La La Land", 4.5, "not seen");
movie[2] = new Movies("Rogue One", 5, "seen");
movie[3] = new Movies("Frozen", 3.5, "not seen");


for (var i = 0; i < movie.length; i++) {
console.log('You have ' + movie[i].hasWatched + ' "' + movie[i].title + '" - ' + movie[i].rating + ' stars');
}