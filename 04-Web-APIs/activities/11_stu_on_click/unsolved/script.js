var count = 5;
var counter = document.getElementById("count");
var decrementor = document.getElementById("decrement");
var incrementor = document.getElementById("increment");

decrementor.addEventListener("click", function () {
  console.log();
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});

incrementor.addEventListener("click", function () {
  count++;
  counter.textContent = count;
});