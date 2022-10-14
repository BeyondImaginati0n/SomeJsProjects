'use strict';
let nextPageSrc=document.querySelector('#next').href;
let img=document.querySelector('img');
img.addEventListener('mouseover',()=>{
    img.parentElement.previousElementSibling.style.opacity='1';
});

img.addEventListener('mouseout',()=>{
    img.parentElement.previousElementSibling.style.opacity='0';
});

setTimeout(()=>{
location.href=nextPageSrc;

},5000);

