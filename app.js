function bgColors(){
  var container = document.getElementById("container");
  var bgColorName = prompt("Enter Background Color");
  container.style.backgroundColor = bgColorName ;
}
function textColors() {
  var para = document.getElementById("para");
  var textColor = prompt("Enter Text Color");
  para.style.color = textColor;
}


function imgChange(toggle, e) {
    console.log("helllloo", toggle, e);
    if (toggle == "on") {
      e.src = "bulbOn.jpg";
    } else {
      e.src = "bulbOff.jpg";
    }
  }
  function imgHandler(el) {
  var img = document.getElementById("img");
  if (el == "show") {
    img.style.display = "block";
  } else if (el == "hide") {
    img.style.display = "none";
  } else if (el == "small") {
    img.style.width = "30%";
    img.style.height = "20%";
  } else if (el == "large") {
    img.style.width = "50%";
    img.style.height = "30%";
  } else {
    return;
  }
}