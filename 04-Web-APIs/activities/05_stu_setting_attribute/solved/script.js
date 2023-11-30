var main = document.querySelector("main");
var sitesE1 = document.querySelector(".sites");
var sites1E1 = document.querySelector(".site1");
var sites2E2 = document.querySelector(".site2");
var sites3E3 = document.querySelector(".site3");
var siteTitles = document.querySelectorAll("h4");

var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];

sites1E1.children[0].textContent = "Site 1";
// sites1E1.children[1].setAttribute("href", "https://google.com");
sites1E1.children[1].children[0].setAttribute("src", "images/image_1.jpg");
sites1E1.children[1].children[0].setAttribute("alt", "man working");
sites1E1.children[1].children[0].setAttribute("style", "padding: 10px");

sites2E2.children[0].textContent = "Site 2";
sites2E2.children[1].setAttribute("href", "https://twitter.com");
sites2E2.children[1].children[0].setAttribute("src", "images/image_2.jpg");
sites2E2.children[1].children[0].setAttribute("alt", "group brainstorm");
sites2E2.children[1].children[0].setAttribute("style", "padding: 10px");

sites3E3.children[0].textContent = "Site 3";
sites3E3.children[1].setAttribute("href", "https://instagram.com");
sites3E3.children[1].children[0].setAttribute("src", "images/image_3.jpg");
sites3E3.children[1].children[0].setAttribute("alt", "women working");
sites3E3.children[1].children[0].setAttribute("style", "padding: 10px");


for (var i = 0; i < siteTitles.length; i++) {
    siteTitles[i].setAttribute("style", "text-decoration: underline; padding-left: 10px; margin: 0");
}

// Bonus
// For this bonus, comment out line 11
for (var i = 0; i < sites.length; i++) {
    sites1E1.children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)]);
}