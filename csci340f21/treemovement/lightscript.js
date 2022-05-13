console.log("testing");
$(document).ready(function() {

  var lights = [$('#stopLight'), $('#slowLight'), $('#goLight')];
  var colorMap = {"stop":"red",
                 "slow":"yellow",
                 "go":"green"};

  for (const [key, value] of Object.entries(colorMap)) {
    $('#' + key + 'Button').click(function() {
       illuminate($('#' + key + 'Light'), value);
     });
  }

function illuminate(light, color) {
  clearLights();
  light.css("background-color", color);
  console.log(fibonacci(5));
}

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function clearLights() {
  //$(".bulb").css();

  lights.forEach(function(item) {
    item.css("background-color", "black");
  });
}
});
