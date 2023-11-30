var imgTags = document.querySelectorAll("img");
var sites1E1 = document.querySelector("site1");
var sites2E2 = document.querySelector("site2");
var sites3E3 = document.querySelector("site3");
var siteTitles = document.querySelector("h1");

var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];

sites1E1.children[0].textContent = "Site 1";
sites1E1.children[1].children[0].setAttribute("href", "https://google.com");
sites1E1.children[1].children[0].setAttribute("src", "images/image_1.jpg");
sites1E1.children[1].children[0].setAttribute("alt", "image_1");
sites1E1.children[1].children[0].setAttribute("style", "padding: 10px");

sites2E2.children[0].textContent = "Site 2";
sites2E2.children[1].children[0].setAttribute("href", "https://twitter.com");
sites2E2.children[1].children[0].setAttribute("src", "images/image_2.jpg");
sites2E2.children[1].children[0].setAttribute("alt", "image_2");
sites2E2.children[1].children[0].setAttribute("style", "padding: 10px");

sites3E3.children[0].textContent = "Site 3";
sites3E3.children[1].children[0].setAttribute("href", "https://instagram.com");
sites3E3.children[1].children[0].setAttribute("src", "images/image_3.jpg");
sites3E3.children[1].children[0].setAttribute("alt", "image_3");
sites3E3.children[1].children[0].setAttribute("style", "padding: 10px");




// for (var index = 0; index < imgTags.length; index++) {
//   var altTag = `image ${index + 1}`;
//   var imgPath = `./images/image_${index + 1}.jpg`;
//   imgTags[index].setAttribute("src", imgPath);
//   imgTags[index].setAttribute("alt", altTag);
// }