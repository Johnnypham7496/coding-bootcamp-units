// Set the document to a variable
var body = document.body;

// create all the necessary elements
var h1E1 = document.createElement("h1");
var h1E2 = document.createElement("h2");
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

body.appendChild(h1E1);