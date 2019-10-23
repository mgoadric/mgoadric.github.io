$( document ).ready(function() {

  var catAttack = function() {
    var headhtml = $("#heading").html();
    $("#heading").html("All About Cats!");
    $(".animal").html("catt");
    $("img").attr("src", "images/cat.jpg");
  }

  $("#clicker").click(catAttack);

});
