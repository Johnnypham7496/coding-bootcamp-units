var counterEl = document.querySelector(".counter");
var wordEl = document.getElementById("main");
var poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var secondsLeft = 5;

function prepareRead() {
  var interval = setInterval(function () {
    secondsLeft--;
    counter.textContent = seconds;

    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
  // Create the countdown timer.
}

function speedRead(seconds) {
  var word = 5 - seconds - 1;
  var wordArray = poem.split("");
  console.log(wordArray);
  word.textContent = wordArray[word];
  // Print words to the screen one at a time.
}
prepareRead();