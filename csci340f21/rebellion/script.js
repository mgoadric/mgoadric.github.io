$(document).ready(function() {
  var catRebellion = function() {
    var x = 2 + 5;
    console.log(x);
    console.log("This is a test!!!!");
    //document.body.innerHTML = "Hello";

    $("img").attr("src", "images/cat.jpg");
    $("img").attr("width", "500");

    $("#heading").html("ALL ABOUT CATS!!");

    $(".animal").html("cats");

    clickButton.remove();
  }

  var clickButton = $("#clicker");
  clickButton.click(catRebellion);

});
