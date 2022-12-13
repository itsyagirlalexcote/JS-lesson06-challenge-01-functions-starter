// Function with no parameters
var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

// Function with one parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocolate chip"));

// Function with two parameters
var introduce = function (name, occupation) {
  return `My name is ${name}, and I am a ${occupation}!`;
};
console.log(introduce("Alex", "Human Relations Agent"));
console.log(introduce("Jonathan", "Designer"));

// Function with prompt and conditional
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations!");
  } else {
    console.log("Not bad, but Let's try again tomorrow.");
  }
};
hydrationFeedback();
