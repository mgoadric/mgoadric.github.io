var catAttack = function() {
  var stuff = 2 + 2;
  console.log("This is my message." + stuff);

  var headingEl = document.getElementById("heading");
  headingEl.innerHTML = "ALL ABOUT CATS!";

  var nameEls = document.getElementsByClassName("animal");
  console.log(nameEls);
  console.log(nameEls[3]);
  for (let i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "cat";
  }

  var imageEls = document.getElementsByTagName("img");
  for (let i = 0; i < imageEls.length; i++) {
    imageEls[i].src = "images/cat.jpg";
  }
}

var clickerButton = document.getElementById("clicker");

var onButtonClick = function() {
  clickerButton.value = "You clicked me!!";
}

clickerButton.addEventListener("click", catAttack);
