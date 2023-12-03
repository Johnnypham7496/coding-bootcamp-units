var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var keySpan = document.getElementById("key");
var codeSpan = document.getElementById("code");
var statusSpan = document.getElementById("status");
var xSpan = document.getElementById("x");
var ySpan = document.getElementById("y");
var targetSpan = document.getElementById("target");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  } else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

//
eventType.addEventListener("change", toggleDisplay);

document.addEventListener("click", function (event) {
  xSpan.textContent = event.x;
  ySpan.textContent = event.y;
  target.textContent = event.target.textContent;
});
document.addEventListener("keydown", function (event) {
  console.log("keyDown event", event);
  keySpan.textContent = event.key;
  codeSpan.textContent = event.keyCode;
  statusSpan.textContent = event.type;
});
document.addEventListener("keyup", function (event) {
  statusSpan.textContent = event.type;
});