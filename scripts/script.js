'use strict';
let imgs=document.querySelectorAll('img');

for(let img of imgs){
    img.addEventListener('mouseover',()=>{
        img.parentElement.previousElementSibling.style.opacity='1';
    });

    img.addEventListener('mouseout',()=>{
        img.parentElement.previousElementSibling.style.opacity='0';
    });
}




