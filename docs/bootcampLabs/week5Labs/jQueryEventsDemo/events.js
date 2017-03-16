// JavaScript File
$("button").click(function() {
   $(this).css("background-color", "pink");
   alert($(this).text());
});

$("input").keypress(function() {
  console.log("A key has been pressed!");
});

$("h1").on("click", function() {
    $(this).css("color", "purple");
});

