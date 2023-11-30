// Set the document to a variable
var body = document.body;

// create all the necessary elements
var h1E1 = document.createElement("h1");
var h2E1 = document.createElement("h2");
var infoE1 = document.createElement("div");
var imgE1 = document.createElement("img");
var kittenE1 = document.createElement("div");
var nameE1 = document.createElement("div");
var favoriteE1 = document.createElement("div");
var listE1 = document.createElement("ol");
var list1 = document.createElement("li");
var list2 = document.createElement("li");
var list3 = document.createElement("li");
var list4 = document.createElement("li");


// store our elements in a variable
var listItems = document.getElementsByTagName("li");


// set the content of relevant elements
h1E1.textContent = "Welcome to my page.";
h2E1.textContent = "This HTML document was created by using JavaScript and Chrome Dev Tools.";
kittenE1.textContent = "This is my kitten.";
nameE1.textContent = "Hi my name is Johnny Pham";
favoriteE1.textContent = "My favorite foods are:";
list1.textContent = "Chicken Fingers";
list2.textContent = "Pizza";
list3.textContent = "Burgers";
list4.textContent = "Sushi";


// append all of our elements
body.appendChild(h1E1);
body.appendChild(h2E1);
body.appendChild(kittenE1);
body.appendChild(nameE1);
body.appendChild(favoriteE1);
body.appendChild(list1);
body.appendChild(list2);
body.appendChild(list3);
body.appendChild(list4);