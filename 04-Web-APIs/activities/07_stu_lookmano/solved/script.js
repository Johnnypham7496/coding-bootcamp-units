// Create your HTML Page via DOM Methods here!
var h1 = document.createElement("h1");
h1.textContent = "hello";
var h2 = document.createElement("h2");
h2.textContent - "World";

var img = document.createElement("img");
img.setAttribute("src", "");
var p = document.createElement("p");
p.textContent = "lfsd;fls;d";

var li1 = document.createElement("li");
li1.textContent = "steak";
var li2 = document.createElement("li");
li2.textContent = "hot dog";
var li3 = document.createElement("li");
li3.textContent = "chicken";

var ul = document.createElement("ul");
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(li);
document.body.appendChild(ul);
document.body.appendChild(img);