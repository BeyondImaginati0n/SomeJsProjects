const form = document.createElement('form');
const nextButton = document.createElement('button');
const previousButton = document.createElement('button');
const slideShowControlButton = document.createElement('button');
const exitButton = document.createElement('button');
const durationInput = document.createElement('input');
nextButton.textContent = "Next";
previousButton.textContent = "Previous";
slideShowControlButton.textContent = "Play";
exitButton.textContent = "Exit";
durationInput.type = 'number';
durationInput.placeholder = "slideDuration";
form.append(nextButton);
form.append(previousButton);
form.append(slideShowControlButton);
form.append(exitButton);
form.append(durationInput);
document.getElementById("displayDIV").append(form);

function showImg(e) {
   document.querySelector("#displayDIV .bigIMG").src = e.target.dataset.large;
   document.querySelector("#displayDIV .bigIMG").id = e.target.id;
   document.querySelector("#displayDIV .desc").innerHTML = e.target.alt;
   document.getElementById("displayDIV").style.display = "block";
}

function hideImg(e) {
   if (e.target.nodeName == "INPUT" || e.target.nodeName == "BUTTON") {
      return;
   }
   e.currentTarget.style.display = "none";
}

function nextPage() {
   const currentImg = document.querySelector("#displayDIV .bigIMG");
   const imagesArray = Array.from(images);
   const nextImgIndex = imagesArray.findIndex(img => {
      return img.id == currentImg.id;
   }) + 1;
   if (!images[nextImgIndex]) {
      document.querySelector("#displayDIV .bigIMG").src = images[0].dataset.large;
      document.querySelector("#displayDIV .desc").innerHTML = images[0].alt;
      document.querySelector("#displayDIV .bigIMG").id = 1;


   } else {
      document.querySelector("#displayDIV .bigIMG").src = images[nextImgIndex].dataset.large;
      document.querySelector("#displayDIV .desc").innerHTML = images[nextImgIndex].alt;
      document.querySelector("#displayDIV .bigIMG").id++;
   }
}

function previousPage() {
   const currentImg = document.querySelector("#displayDIV .bigIMG");
   const imagesArray = Array.from(images);
   const nextImgIndex = imagesArray.findIndex(img => {
      return img.id == currentImg.id;
   }) - 1;
   if (!images[nextImgIndex]) {
      document.querySelector("#displayDIV .bigIMG").src = images[images.length - 1].dataset.large;
      document.querySelector("#displayDIV .desc").innerHTML = images[images.length - 1].alt;
      document.querySelector("#displayDIV .bigIMG").id = images.length;


   } else {
      document.querySelector("#displayDIV .bigIMG").src = images[nextImgIndex].dataset.large;
      document.querySelector("#displayDIV .desc").innerHTML = images[nextImgIndex].alt;
      document.querySelector("#displayDIV .bigIMG").id--;
   }
}

let images = document.querySelectorAll('.gallery img');
for (let i = 0; i < images.length; i++) {
   images[i].id = i + 1;
   images[i].addEventListener("click", showImg);
}
document.getElementById("displayDIV").addEventListener("click", hideImg);



nextButton.addEventListener('click', (e) => {
   e.preventDefault();
   nextPage();
});

previousButton.addEventListener('click', (e) => {
   e.preventDefault();
   previousPage();
});
let interval = null;
slideShowControlButton.addEventListener('click', (e) => {
   e.preventDefault();
   const intervalDuration = durationInput.value ? durationInput.value : 3;
   if (e.target.textContent == 'Play') {
      e.target.textContent = 'Pause';
      interval = setInterval(() => {
         nextPage();
      }, intervalDuration * 1000);
   } else {
      e.target.textContent = 'Play';
      clearInterval(interval);
   }
});

exitButton.addEventListener('click',()=>{
clearInterval(interval);
document.querySelector("#displayDIV .bigIMG").display='none';
});