var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

//User Button click Function

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  console.log(userClickedPattern);
});

// system random selection function

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  console.log(randomNumber);
  console.log(randomChosenColour);
  console.log(gamePattern);
}

//Sound function

function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

//Animation function

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");

  setTimeout(function () {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}

nextSequence();
