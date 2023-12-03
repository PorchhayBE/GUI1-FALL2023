$(function() {
	// Insert “Just Updated” (as a paragraph).
  $("<p>Just Updated</p>").insertAfter("h2");

  // Add a plus symbol (+) before all list items whose class attribute contains value “hot” 
  $("li.hot").prepend("+ ");

  // Create and add a new list item “gluten-free soy sauce”
  $("<li><em>gluten-free soy sauce</em></li>").appendTo("ul");

});