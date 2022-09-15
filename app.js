var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = document.querySelectorAll(".drum-key")[i].innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "j":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("active");
  console.log(activeButton);

  setTimeout(function() {
    activeButton.classList.remove("active");
  }, 100);
}

/* $0.addEventListener("click", function() {
  console.log("I got clicked");
}) GHOST FUNCTION */

/* $0.addEventListener("click", zarAt);

function zarAt() {
  console.log("I got clicked");
} NORMAL FUNCTION */
