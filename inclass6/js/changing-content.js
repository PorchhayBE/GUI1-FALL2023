$(function() {
  // fine the item "pine" and change the text to "almonds"
  $("#two").text("almonds");

  // Select all list items whose class attribute is “hot”, and add <em> tag

  $("li.hot").wrapInner("<em></em>");
  
  // remove the first item from the list
  $("li").eq(0).remove();
});