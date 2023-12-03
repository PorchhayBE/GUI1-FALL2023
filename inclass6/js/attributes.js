$(function () {
  //   Find the third list item, and remove hot from the class attribute on that element (turn orange)
  $("li").eq(2).removeClass("hot")

//   Select all <li> elements whose class attribute is “hot”, add a new class name called “favorite” (heart)
  $("li.hot").addClass("favorite")
})
