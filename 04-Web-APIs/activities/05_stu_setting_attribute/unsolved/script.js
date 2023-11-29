var imgTags = document.querySelectorAll("img");

for (var index = 0; index < imgTags.length; index++) {
  var altTag = `image ${index + 1}`;
  var imgPath = `./images/image_${index + 1}.jpg`;
  imgTags[index].setAttribute("src", imgPath);
  imgTags[index].setAttribute("alt", altTag);
}