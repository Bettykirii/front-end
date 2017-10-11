/*let heading = document.getElementsByTagName('h1');
heading.style.color = "white";
heading.style.fontSize = "100px";

heading.style.backgroundColor = 'red';
heading.innerHTML = "This is a heading";
console.log(heading);
let elem = document.createElement("h2");
elem.innerHTML="Hiiiii people"
let body = document.querySelector("body");
body.appendChild(elem);*/


let images = document.querySelectorAll(".thumbnails img");
let viewer = document.querySelector(".viewer ");



let largeImage = document.createElement("img");
viewer.appendChild(largeImage);

let caption = document.createElement('p');
viewer.appendChild(caption);

images.forEach(function(image){
  image.onclick = function click(event){

    console.log("caption");
    let img = event.target;
    largeImage.src = img.src
    
    let captionText = img.getAttribute('data-caption');
    caption.innerHTML = captionText;
  }
})


     // viewer.src = img.src;
     // largeImage.src = img.src;
 
