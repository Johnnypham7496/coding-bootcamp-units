// Set the document to a variable
var body = document.body;

// create all the necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var list1 = document.createElement("li");
var list2 = document.createElement("li");
var list3 = document.createElement("li");
var list4 = document.createElement("li");


// store our elements in a variable
var listItems = document.getElementsByTagName("li");


// set the content of relevant elements
h1El.textContent = "Welcome to my page";
h2El.textContent = "This HTML document was created by using JavaScript and Chrome Dev Tools.";
kittenEl.textContent = "This is my kitten.";
nameEl.textContent = "Hi my name is Johnny Pham";
favoriteEl.textContent = "My favorite foods are:";
list1.textContent = "Chicken Fingers";
list2.textContent = "Pizza";
list3.textContent = "Burgers";
list4.textContent = "Sushi";


// append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl)
listEl.appendChild(list1);
listEl.appendChild(list2);
listEl.appendChild(list3);
listEl.appendChild(list4);


// style all of our elements
h1El.setAttribute("style", "margin: auto; width: 50%; text-align: center");
h2El.setAttribute("style", "margin: auto; width: 100%; text-align: center");
infoEl.setAttribute("style", "margin: auto; width:50%; text-align: center");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200);
nameEl.setAttribute("style", "font-size: 25px; text-align: center");
kittenEl.setAttribute("style", "font-size: 25px; text-align: center");
favoriteEl.setAttribute("style", "font-size: 20px");
listEl.setAttribute("style", "background: #333333; padding: 20px");
listItems[0].setAttribute("style", "color: white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", "color: white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", "color: white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", "color: white; background: #999999; padding: 5px; margin-left: 35px;");